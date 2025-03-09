
import React from 'react';
import { Document, Page, Text, View, StyleSheet, PDFViewer } from '@react-pdf/renderer';

// Create styles for PDF content
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    padding: 30,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#2563eb',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 12,
    marginBottom: 8,
    lineHeight: 1.5,
  },
  footer: {
    position: 'absolute',
    bottom: 30,
    left: 30,
    right: 30,
    textAlign: 'center',
    fontSize: 10,
    color: '#666',
  },
});

interface SamplePDFProps {
  title: string;
  course: string;
}

// Create a sample PDF Document component
const SamplePDFDocument: React.FC<SamplePDFProps> = ({ title, course }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Text style={styles.header}>Chandigarh University</Text>
      
      <View style={styles.section}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.text}>Course: {course}</Text>
        <Text style={styles.text}>
          This is a sample {course} project report created for demonstration purposes.
          The actual reports are thoroughly researched and formatted according to
          university guidelines.
        </Text>
      </View>
      
      <View style={styles.section}>
        <Text style={styles.title}>Report Content Sample</Text>
        <Text style={styles.text}>
          1. Executive Summary
        </Text>
        <Text style={styles.text}>
          2. Introduction
        </Text>
        <Text style={styles.text}>
          3. Research Methodology
        </Text>
        <Text style={styles.text}>
          4. Literature Review
        </Text>
        <Text style={styles.text}>
          5. Data Analysis and Findings
        </Text>
        <Text style={styles.text}>
          6. Conclusions and Recommendations
        </Text>
        <Text style={styles.text}>
          7. Bibliography and Appendices
        </Text>
      </View>
      
      <Text style={styles.footer}>
        © {new Date().getFullYear()} Chandigarh University Project Reports Service
      </Text>
    </Page>
  </Document>
);

// Create the PDF viewer component
const SamplePDF: React.FC<SamplePDFProps> = ({ title, course }) => (
  <PDFViewer width="100%" height="500px" style={{ border: 'none' }}>
    <SamplePDFDocument title={title} course={course} />
  </PDFViewer>
);

export default SamplePDF;
