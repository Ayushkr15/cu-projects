
import React, { useState, useEffect } from "react";
import { FileText, X } from "lucide-react";
import { toast } from "sonner";

// Define interface locally since we're removing Supabase
interface PortfolioItem {
  id: number;
  title: string;
  course: "MBA" | "BBA";
  thumbnail: string;
  description: string;
  pdfUrl: string;
}

const PortfolioSection: React.FC = () => {
  const [portfolioItems, setPortfolioItems] = useState<PortfolioItem[]>([]);
  const [selectedItem, setSelectedItem] = useState<number | null>(null);
  const [filter, setFilter] = useState<"ALL" | "MBA" | "BBA">("ALL");
  const [isLoading, setIsLoading] = useState(true);

  // Load portfolio items from AWS S3
  useEffect(() => {
    const loadPortfolioItems = async () => {
      try {
        setIsLoading(true);

        // Load portfolio data from S3 JSON file
        const response = await fetch(
          "https://cu-project.s3.us-east-1.amazonaws.com/portfolio-items.json"
        );
        if (!response.ok) throw new Error("Failed to fetch portfolio items");

        const items = await response.json();
        setPortfolioItems(items);
      } catch (error) {
        console.error("Failed to load portfolio items:", error);
        toast.error("Failed to load portfolio samples");
      } finally {
        setIsLoading(false);
      }
    };

    loadPortfolioItems();
  }, []);

  const filteredItems =
    filter === "ALL"
      ? portfolioItems
      : portfolioItems.filter(item => item.course === filter);

  const openPreview = (id: number) => {
    setSelectedItem(id);
    document.body.style.overflow = "hidden";
  };

  const closePreview = () => {
    setSelectedItem(null);
    document.body.style.overflow = "auto";
  };

  return (
    <section id="portfolio" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary mb-3 inline-block">
            Our Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Project Report Samples
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Browse our collection of professionally crafted project reports.
            These samples showcase our expertise in creating high-quality
            academic work.
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-md bg-white shadow-sm p-1">
            <button
              onClick={() => setFilter("ALL")}
              className={`px-4 py-2 text-sm font-medium rounded ${
                filter === "ALL" ? "bg-primary text-white" : "hover:bg-gray-100"
              } transition-all duration-200`}
            >
              All
            </button>
            <button
              onClick={() => setFilter("MBA")}
              className={`px-4 py-2 text-sm font-medium rounded ${
                filter === "MBA" ? "bg-primary text-white" : "hover:bg-gray-100"
              } transition-all duration-200`}
            >
              MBA
            </button>
            <button
              onClick={() => setFilter("BBA")}
              className={`px-4 py-2 text-sm font-medium rounded ${
                filter === "BBA" ? "bg-primary text-white" : "hover:bg-gray-100"
              } transition-all duration-200`}
            >
              BBA
            </button>
          </div>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center min-h-[300px]">
            <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map(item => (
              <div
                key={item.id}
                className="glass rounded-lg overflow-hidden group cursor-pointer hover:shadow-lg transition-all duration-300"
                onClick={() => openPreview(item.id)}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div className="text-white">
                      <span className="text-xs bg-primary px-2 py-1 rounded">
                        {item.course}
                      </span>
                      <h3 className="font-medium mt-2">{item.title}</h3>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <span className="text-xs font-medium bg-primary/10 text-primary px-2 py-1 rounded">
                    {item.course}
                  </span>
                  <h3 className="font-medium mt-2 group-hover:text-primary transition-colors duration-200">
                    {item.title}
                  </h3>
                  <div className="flex items-center text-sm text-muted-foreground mt-2">
                    <FileText size={16} className="mr-1" />
                    <span>Click to preview</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Preview Modal */}
        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 animate-fade-in overflow-auto">
            <div className="bg-white rounded-lg w-full max-w-4xl max-h-[90vh] flex flex-col animate-scale-in">
              <div className="flex items-center justify-between p-4 border-b">
                <h3 className="font-medium">
                  {portfolioItems.find(item => item.id === selectedItem)?.title}
                </h3>
                <button
                  onClick={closePreview}
                  className="text-gray-500 hover:text-gray-700"
                  aria-label="Close preview"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="flex-1 overflow-auto p-4">
                {/* Display the PDF iframe */}
                <div className="w-full h-[70vh]">
                  <iframe
                    src={
                      portfolioItems.find(item => item.id === selectedItem)
                        ?.pdfUrl
                    }
                    className="w-full h-full"
                    allow="autoplay"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PortfolioSection;
