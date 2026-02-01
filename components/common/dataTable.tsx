"use client";
import React, { useState } from "react";
import { Search, Trash2, ChevronLeft, ChevronRight } from "lucide-react";

export default function DataTable({ data = [] }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  // Sample data if none provided
  const sampleData = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      dateSubmitted: "1/15/2024",
    },
    {
      id: 2,
      name: "John Doe",
      email: "john@example.com",
      dateSubmitted: "1/15/2024",
    },
    {
      id: 3,
      name: "John Doe",
      email: "john@example.com",
      dateSubmitted: "1/15/2024",
    },
    {
      id: 4,
      name: "John Doe",
      email: "john@example.com",
      dateSubmitted: "1/15/2024",
    },
    {
      id: 5,
      name: "Jane Smith",
      email: "jane@example.com",
      dateSubmitted: "1/16/2024",
    },
    {
      id: 6,
      name: "Bob Wilson",
      email: "bob@example.com",
      dateSubmitted: "1/17/2024",
    },
  ];

  const tableData = data.length > 0 ? data : sampleData;

  // Filter data based on search
  const filteredData = tableData.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.email.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  // Pagination logic
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = filteredData.slice(startIndex, endIndex);

  const handleDelete = (id: number) => {
    console.log("Delete item:", id);
    // Add your delete logic here
  };

  const goToPage = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="w-full rounded-lg bg-white py-6">
      {/* Search Bar */}
      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search items"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full rounded-lg border border-gray-200 bg-gray-50 py-2.5 pl-10 pr-4 text-sm text-gray-700 outline-none focus:border-gray-300 focus:ring-1 focus:ring-gray-300"
          />
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="pb-3 text-left text-sm font-medium text-gray-600">
                Name
              </th>
              <th className="pb-3 text-left text-sm font-medium text-gray-600">
                Email
              </th>
              <th className="pb-3 text-left text-sm font-medium text-gray-600">
                Date Submitted
              </th>
              <th className="pb-3 text-left text-sm font-medium text-gray-600">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((item, index) => (
              <tr
                key={item.id}
                className={`${
                  index !== currentData.length - 1
                    ? "border-b border-gray-100"
                    : ""
                }`}
              >
                <td className="py-4 text-sm text-gray-700">{item.name}</td>
                <td className="py-4 text-sm text-gray-700">{item.email}</td>
                <td className="py-4 text-sm text-gray-700">
                  {item.dateSubmitted}
                </td>
                <td className="py-4">
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="text-orange-500 cursor-pointer hover:text-orange-600  transition hover:text-orange-600"
                    aria-label="Delete"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer with Record Count and Pagination */}
      <div className="mt-6 flex items-center justify-between">
        {/* Record Count */}
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-100">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="text-gray-600"
            >
              <rect
                x="2"
                y="3"
                width="12"
                height="2"
                rx="1"
                fill="currentColor"
              />
              <rect
                x="2"
                y="7"
                width="12"
                height="2"
                rx="1"
                fill="currentColor"
              />
              <rect
                x="2"
                y="11"
                width="12"
                height="2"
                rx="1"
                fill="currentColor"
              />
            </svg>
          </div>
          <span>{filteredData.length} Record(s)</span>
        </div>

        {/* Pagination */}
        <div className="flex items-center gap-1">
          <button
            onClick={() => goToPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 text-gray-600 transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          {[...Array(totalPages)].map((_, index) => {
            const pageNumber = index + 1;
            return (
              <button
                key={pageNumber}
                onClick={() => goToPage(pageNumber)}
                className={`flex h-8 w-8 items-center justify-center rounded-lg text-sm transition ${
                  currentPage === pageNumber
                    ? "bg-gray-200 font-medium text-gray-900"
                    : "border border-gray-200 text-gray-600 hover:bg-gray-50"
                }`}
              >
                {pageNumber}
              </button>
            );
          })}

          <button
            onClick={() => goToPage(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 text-gray-600 transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
