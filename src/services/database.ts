import { toast } from "sonner";
import {
  DynamoDBClient,
  PutItemCommand,
  ScanCommand,
} from "@aws-sdk/client-dynamodb";
import {
  S3Client,
  PutObjectCommand,
  GetObjectCommand,
} from "@aws-sdk/client-s3";
import { v4 as uuidv4 } from "uuid";

// AWS Configuration
const AWS_REGION = import.meta.env.VITE_AWS_REGION;
const AWS_ACCESS_KEY_ID = import.meta.env.VITE_AWS_ACCESS_KEY_ID;
const AWS_SECRET_ACCESS_KEY = import.meta.env.VITE_AWS_SECRET_ACCESS_KEY;

// Initialize AWS Clients
const dynamoClient = new DynamoDBClient({
  region: AWS_REGION,
  credentials: {
    accessKeyId: AWS_ACCESS_KEY_ID,
    secretAccessKey: AWS_SECRET_ACCESS_KEY,
  },
});

const s3Client = new S3Client({
  region: AWS_REGION,
  credentials: {
    accessKeyId: AWS_ACCESS_KEY_ID,
    secretAccessKey: AWS_SECRET_ACCESS_KEY,
  },
});

// Define Types
export interface Order {
  orderId: string;
  name: string;
  email: string;
  phone: string;
  course: string;
  projectTitle: string;
  createdAt: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  course: "MBA" | "BBA";
  thumbnail: string;
  description: string;
  pdfUrl: string;
}

class AWSDatabaseService {
  private static instance: AWSDatabaseService;
  private portfolioBucketName = "your-portfolio-bucket";
  private ordersTableName = "ProjectOrders";

  private constructor() {
    this.initializeAWSResources();
  }

  public static getInstance(): AWSDatabaseService {
    if (!AWSDatabaseService.instance) {
      AWSDatabaseService.instance = new AWSDatabaseService();
    }
    return AWSDatabaseService.instance;
  }

  private async initializeAWSResources() {
    console.log("Initializing AWS resources...");
    // Add any necessary initialization checks here
  }

  // Get portfolio items from S3 JSON file
  async getPortfolioItems(): Promise<PortfolioItem[]> {
    try {
      const command = new GetObjectCommand({
        Bucket: this.portfolioBucketName,
        Key: "portfolio-items.json",
      });

      const response = await s3Client.send(command);
      const data = await response.Body?.transformToString();

      if (!data) return [];

      return JSON.parse(data) as PortfolioItem[];
    } catch (error) {
      console.error("Error loading portfolio items:", error);
      toast.error("Failed to load portfolio items");
      return [];
    }
  }

  // Submit order to DynamoDB
  async submitOrder(
    order: Omit<Order, "orderId" | "createdAt">
  ): Promise<Order> {
    try {
      const newOrder: Order = {
        ...order,
        orderId: uuidv4(),
        createdAt: new Date().toISOString(),
      };

      const command = new PutItemCommand({
        TableName: this.ordersTableName,
        Item: {
          orderId: { S: newOrder.orderId },
          name: { S: newOrder.name },
          email: { S: newOrder.email },
          phone: { S: newOrder.phone },
          course: { S: newOrder.course },
          projectTitle: { S: newOrder.projectTitle },
          createdAt: { S: newOrder.createdAt },
        },
      });

      await dynamoClient.send(command);

      toast.success("Order submitted successfully!", {
        description: "We'll contact you within 24 hours.",
      });

      return newOrder;
    } catch (error) {
      console.error("Error submitting order:", error);
      toast.error("Failed to submit order", {
        description: "Please try again or contact support.",
      });
      throw error;
    }
  }

  // Optional: Get all orders (for admin purposes)
  async getAllOrders(): Promise<Order[]> {
    try {
      const command = new ScanCommand({
        TableName: this.ordersTableName,
      });

      const response = await dynamoClient.send(command);
      return (response.Items || []).map(item => ({
        orderId: item.orderId.S || "",
        name: item.name.S || "",
        email: item.email.S || "",
        phone: item.phone.S || "",
        course: item.course.S || "",
        projectTitle: item.projectTitle.S || "",
        createdAt: item.createdAt.S || "",
      }));
    } catch (error) {
      console.error("Error fetching orders:", error);
      return [];
    }
  }
}

// Export singleton instance
export const dbService = AWSDatabaseService.getInstance();
