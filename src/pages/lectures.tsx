import Head from "@docusaurus/Head";
import Layout from "@theme/Layout";
import { useEffect, useState } from "react";
import Videos from "../../lectures/Videolectures"; // make sure path and case match exactly
import CourseProgress from "../components/CourseProgress";
import styles from './index.module.css';

export default function LecturesPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  useEffect(() => {
    const savedCategory = localStorage.getItem("selectedCategory");
    if (savedCategory) {
      setSelectedCategory(savedCategory);
    }
  }, []);

  // Save category to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("selectedCategory", selectedCategory);
  }, [selectedCategory]);

  const filteredVideos =
    selectedCategory === "all"
      ? Videos
      : Videos.filter(
          (video) =>
            video.category.toLowerCase() === selectedCategory.toLowerCase()
        );
    const lessons = filteredVideos.map((video, idx) => ({
      id: `${selectedCategory}-${idx}`, // unique ID
      title: video.title,
  }));

  return (
    <Layout>
      <Head>
      <title>"Video Lectures"</title>
      <meta name="description" content= "Watch our latest educational videos" />
    </Head>
      <main className="container margin-vert--lg">
        <h2 className="text-2xl font-bold">Video Lectures</h2>
        <div className="margin-bottom--md">
          <select
            className={styles.filterlect}
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="all">All Categories</option>
            <option value="generative-ai">Generative AI</option>
            <option value="data-structure">Data Structure</option>
            <option value="blockchain">Blockchain</option>
            <option value="devops">DevOps</option>
            <option value="ai">AI</option>
          </select>
        </div>

         {lessons.length > 0 && (
          <div className="margin-bottom--lg">
            <CourseProgress courseId={selectedCategory} lessons={lessons} />
          </div>
        )}

      

        {filteredVideos.length === 0 ? (
          <p>No videos available in this category.</p>
        ) : (
          <div className={styles.videoGrid}>
            {filteredVideos.map((video, idx) => (
            <div key={idx} className="border p-4 rounded mb-4">
              <h3 className="font-semibold">{video.title}</h3>
              <p className="text-sm text-gray-600">{video.description}</p>
              <p className="text-xs text-gray-500">
                Category: {video.category}
              </p>
              <video controls width="100%">
                <source src={video.src} type="video/mp4" />
              </video>
            </div>
          ))}
          </div>
          
        )}
      </main>
    </Layout>
  );
}
