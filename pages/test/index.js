import Layout from "../../components/layout";
import Profile from "../../components/profile";
import Link from "next/link";
import { Fragment } from "react";
import { TableTest } from "../../components/table/tableTest/tableTest";

function testPage() {
  return (
    <Layout title="testPage">
      <main className="font-inter">
        <div className="w-auto min-h-screen mx-8 mt-10 mb-14">
          {/* header */}
          <div className="flex flex-wrap justify-between">
            <div>
              {/* Header */}
              <h1 className="text-2xl font-bold text-[#303030]">testPage</h1>
              <div className="flex items-center mt-8 mb-4">
                {/* jumlah record */}
                <p>Semua</p>
                <span>()</span>
              </div>
            </div>
            <div>
              {/* Profil component */}
              <div className="flex justify-end items-center">
                <Profile />
              </div>
            </div>
          </div>
          {/* tabel */}
          <div>
            <TableTest />
          </div>
        </div>
      </main>
    </Layout>
  );
}
export default testPage;
