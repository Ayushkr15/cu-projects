
import React from 'react';
import { ClipboardCheck, Clock, BookOpen, Award } from 'lucide-react';

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary mb-3 inline-block">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Comprehensive Project Report Solutions
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We provide end-to-end project report services tailored specifically for 
            Chandigarh University BBA and MBA students.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="glass p-6 rounded-lg hover:shadow-lg transition-all duration-300">
            <div className="h-12 w-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
              <ClipboardCheck size={24} />
            </div>
            <h3 className="text-xl font-medium mb-2">Custom Reports</h3>
            <p className="text-muted-foreground mb-4">
              Professionally written reports tailored to your specific topic and 
              following Chandigarh University's guidelines.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <span className="h-5 w-5 text-primary mr-2 flex-shrink-0">✓</span>
                <span>Original content with proper citations</span>
              </li>
              <li className="flex items-start">
                <span className="h-5 w-5 text-primary mr-2 flex-shrink-0">✓</span>
                <span>Well-structured chapters following university format</span>
              </li>
              <li className="flex items-start">
                <span className="h-5 w-5 text-primary mr-2 flex-shrink-0">✓</span>
                <span>Includes all required sections and appendices</span>
              </li>
            </ul>
          </div>
          
          <div className="glass p-6 rounded-lg hover:shadow-lg transition-all duration-300">
            <div className="h-12 w-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
              <Clock size={24} />
            </div>
            <h3 className="text-xl font-medium mb-2">Timely Delivery</h3>
            <p className="text-muted-foreground mb-4">
              We understand academic deadlines are crucial. Count on us to deliver
              your project report on or before the agreed date.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <span className="h-5 w-5 text-primary mr-2 flex-shrink-0">✓</span>
                <span>Typical turnaround time of 7-14 days</span>
              </li>
              <li className="flex items-start">
                <span className="h-5 w-5 text-primary mr-2 flex-shrink-0">✓</span>
                <span>Rush options available for tight deadlines</span>
              </li>
              <li className="flex items-start">
                <span className="h-5 w-5 text-primary mr-2 flex-shrink-0">✓</span>
                <span>Regular progress updates throughout the process</span>
              </li>
            </ul>
          </div>
          
          <div className="glass p-6 rounded-lg hover:shadow-lg transition-all duration-300">
            <div className="h-12 w-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
              <BookOpen size={24} />
            </div>
            <h3 className="text-xl font-medium mb-2">Research Excellence</h3>
            <p className="text-muted-foreground mb-4">
              Our reports are backed by thorough research and analysis, ensuring
              high-quality academic content.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <span className="h-5 w-5 text-primary mr-2 flex-shrink-0">✓</span>
                <span>Comprehensive literature review</span>
              </li>
              <li className="flex items-start">
                <span className="h-5 w-5 text-primary mr-2 flex-shrink-0">✓</span>
                <span>Data analysis and interpretation</span>
              </li>
              <li className="flex items-start">
                <span className="h-5 w-5 text-primary mr-2 flex-shrink-0">✓</span>
                <span>Industry-specific insights and recommendations</span>
              </li>
            </ul>
          </div>
          
          <div className="glass p-6 rounded-lg hover:shadow-lg transition-all duration-300">
            <div className="h-12 w-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
              <Award size={24} />
            </div>
            <h3 className="text-xl font-medium mb-2">Quality Assurance</h3>
            <p className="text-muted-foreground mb-4">
              Every report undergoes rigorous quality checks to ensure it meets
              academic standards and university requirements.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <span className="h-5 w-5 text-primary mr-2 flex-shrink-0">✓</span>
                <span>Plagiarism-free content with Turnitin report</span>
              </li>
              <li className="flex items-start">
                <span className="h-5 w-5 text-primary mr-2 flex-shrink-0">✓</span>
                <span>Professional proofreading and editing</span>
              </li>
              <li className="flex items-start">
                <span className="h-5 w-5 text-primary mr-2 flex-shrink-0">✓</span>
                <span>Revisions available if needed</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-medium mb-4">Pricing</h3>
          <div className="flex flex-col md:flex-row justify-center gap-6 max-w-3xl mx-auto">
            <div className="glass rounded-lg p-6 flex-1 hover:shadow-lg transition-all duration-300">
              <div className="text-primary font-bold text-2xl mb-2">₹3,000</div>
              <h4 className="font-medium mb-4">BBA Project Report</h4>
              <ul className="text-sm text-left space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="h-5 w-5 text-primary mr-2 flex-shrink-0">✓</span>
                  <span>50-70 pages of content</span>
                </li>
                <li className="flex items-start">
                  <span className="h-5 w-5 text-primary mr-2 flex-shrink-0">✓</span>
                  <span>Complete literature review</span>
                </li>
                <li className="flex items-start">
                  <span className="h-5 w-5 text-primary mr-2 flex-shrink-0">✓</span>
                  <span>Research methodology</span>
                </li>
                <li className="flex items-start">
                  <span className="h-5 w-5 text-primary mr-2 flex-shrink-0">✓</span>
                  <span>Data analysis & findings</span>
                </li>
              </ul>
              <div className="text-center">
                <div className="text-xs text-muted-foreground mb-4">
                  ₹1,000 deposit to start, ₹2,000 on completion
                </div>
              </div>
            </div>
            
            <div className="glass rounded-lg p-6 flex-1 border border-primary relative hover:shadow-lg transition-all duration-300">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-white text-xs font-medium py-1 px-3 rounded-full">
                Most Popular
              </div>
              <div className="text-primary font-bold text-2xl mb-2">₹5,000</div>
              <h4 className="font-medium mb-4">MBA Project Report</h4>
              <ul className="text-sm text-left space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="h-5 w-5 text-primary mr-2 flex-shrink-0">✓</span>
                  <span>80-120 pages of content</span>
                </li>
                <li className="flex items-start">
                  <span className="h-5 w-5 text-primary mr-2 flex-shrink-0">✓</span>
                  <span>In-depth literature review</span>
                </li>
                <li className="flex items-start">
                  <span className="h-5 w-5 text-primary mr-2 flex-shrink-0">✓</span>
                  <span>Advanced research methodology</span>
                </li>
                <li className="flex items-start">
                  <span className="h-5 w-5 text-primary mr-2 flex-shrink-0">✓</span>
                  <span>Comprehensive data analysis</span>
                </li>
                <li className="flex items-start">
                  <span className="h-5 w-5 text-primary mr-2 flex-shrink-0">✓</span>
                  <span>Detailed recommendations</span>
                </li>
              </ul>
              <div className="text-center">
                <div className="text-xs text-muted-foreground mb-4">
                  ₹1,000 deposit to start, ₹4,000 on completion
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
