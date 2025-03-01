"use client";

import data from "@/lib/seed.json";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import ItemCard from "@/components/itemCard/ItemCard";

export default function MakePost() {
  const [searchTerm, setSearchTerm] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    imgURL: "",
    value: "",
    itemDescrip: "",
    owner: "Middlebury Merchant 1",
    tags: [],
  });

  const [previewVisible, setPreviewVisible] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleTagsChange = (e) => {
    const tagsArray = e.target.value.split(",").map(tag => tag.trim());
    setFormData((prevData) => ({
      ...prevData,
      tags: tagsArray,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Somehow update the json file
    console.log("Form submitted:", formData);
  };

  return (
    <>
    <Navbar setSearchTerm={setSearchTerm} />
      <div className="container mx-auto p-6">
        <h1 className="text-2xl font-bold mb-6">Create New Listing</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Item Details</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Item Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="imgURL">Image URL</Label>
                  <Input
                    id="imgURL"
                    name="imgURL"
                    value={formData.imgURL}
                    onChange={handleChange}
                    placeholder="https://example.com/image.jpg"
                  />
                </div>
                
                <div>
                  <Label htmlFor="value">Price ($)</Label>
                  <Input
                    id="value"
                    name="value"
                    type="number"
                    value={formData.value}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="itemDescrip">Description</Label>
                  <Textarea
                    id="itemDescrip"
                    name="itemDescrip"
                    value={formData.itemDescrip}
                    onChange={handleChange}
                    rows={4}
                  />
                </div>
                
                <div>
                  <Label htmlFor="tags">Tags (comma separated)</Label>
                  <Input
                    id="tags"
                    name="tags"
                    placeholder="chair, couch, wooden, etc."
                    onChange={handleTagsChange}
                  />
                </div>
                
                <div className="flex justify-between">
                  <Button type="button" variant="outline" onClick={() => setPreviewVisible(!previewVisible)}>
                    {previewVisible ? "Hide Preview" : "Show Preview"}
                  </Button>
                  <Link href="/home">
                    <Button type="submit">Create Listing</Button>
                  </Link>
                </div>
              </form>
            </CardContent>
          </Card>
          {previewVisible && (
            <Card>
              <CardHeader>
                <CardTitle>{formData.name || "Item Name"}</CardTitle>
              </CardHeader>
              <CardContent>
                {formData.imgURL && (
                  <img 
                    src={formData.imgURL} 
                    alt="Item Preview" 
                    className="w-full h-48 object-cover mb-4 rounded-md"
                    onError={(e) => e.target.src = "https://via.placeholder.com/300x200?text=Image+Not+Found"}
                  />
                )}
                <p className="font-medium">Price: ${formData.value || "0"}</p>
                <p className="mt-2">{formData.itemDescrip || "No description provided."}</p>
                {formData.tags.length > 0 && (
                  <div className="mt-4">
                    <p className="text-sm text-gray-500">Tags:</p>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {formData.tags.map((tag, index) => (
                        tag && <span key={index} className="bg-gray-100 px-2 py-1 text-xs rounded">{tag}</span>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
              <CardFooter>
                <Button disabled>Contact {formData.owner}</Button>
              </CardFooter>
            </Card>
          )}
        </div>
      </div>
    </>
  );
}

