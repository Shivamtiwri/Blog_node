-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 16, 2025 at 01:27 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_blog`
--

-- --------------------------------------------------------

--
-- Table structure for table `blog_content`
--

CREATE TABLE `blog_content` (
  `id` int(11) NOT NULL,
  `admin_id` varchar(255) NOT NULL,
  `title` varchar(500) NOT NULL,
  `meta_title` varchar(500) NOT NULL,
  `description` longtext DEFAULT NULL,
  `image_path` varchar(255) NOT NULL,
  `image_url` varchar(255) NOT NULL,
  `created_date` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `blog_content`
--

INSERT INTO `blog_content` (`id`, `admin_id`, `title`, `meta_title`, `description`, `image_path`, `image_url`, `created_date`) VALUES
(10, '1', 'Mastering the Art of Writing a Blog Post: A Step-by-Step Guide for 2024', 'Hey Hi How Are You', '<h1 style=\"text-align:start;\"><span style=\"color: rgb(36,36,36);background-color: rgb(255,255,255);font-size: 24px;font-family: sohne, \"Helvetica Neue\", Helvetica, Arial, sans-serif;\"><strong>How to Write the Perfect Blog Post: My 10,000 Word Journey</strong></span></h1>\r\n<p style=\"text-align:start;\"><span style=\"color: rgb(36,36,36);background-color: rgb(255,255,255);font-size: 20px;font-family: source-serif-pro, Georgia, Cambria, \"Times New Roman\", Times, serif;\">Starting a blog was one of the most rewarding things I’ve done in my career. As someone who loves writing and connecting with readers, having an outlet to share my thoughts while potentially helping others has been an incredible experience.</span></p>\r\n<p style=\"text-align:start;\"><span style=\"color: rgb(36,36,36);background-color: rgb(255,255,255);font-size: 20px;font-family: source-serif-pro, Georgia, Cambria, \"Times New Roman\", Times, serif;\">When I first began blogging a few years ago, I really had no idea what I was doing. I would just sit down at my computer whenever inspiration struck and write whatever came to mind. Sometimes I would publish posts without even proofreading them because I was so eager to get my ideas out there.</span></p>\r\n<p style=\"text-align:start;\"><span style=\"color: rgb(36,36,36);background-color: rgb(255,255,255);font-size: 20px;font-family: source-serif-pro, Georgia, Cambria, \"Times New Roman\", Times, serif;\">Looking back now, those early posts were pretty rough. It’s almost cringe-worthy to read some of my early writing. But we all have to start somewhere, right? Even though I made plenty of mistakes (which I’ll detail later in this post), blogging has enabled me to find my voice, create helpful content, and connect with readers from all walks of life.</span></p>\r\n<p style=\"text-align:start;\"><span style=\"color: rgb(36,36,36);background-color: rgb(255,255,255);font-size: 20px;font-family: source-serif-pro, Georgia, Cambria, \"Times New Roman\", Times, serif;\">If you’re thinking about starting a blog but feel intimidated or don’t know where to begin, I want this post to encourage you. You don’t have to have everything figured out on day one. I certainly didn’t! Consider this your kick in the pants to just take that first step and start writing.</span></p>\r\n<p style=\"text-align:start;\"><span style=\"color: rgb(36,36,36);background-color: rgb(255,255,255);font-size: 20px;font-family: source-serif-pro, Georgia, Cambria, \"Times New Roman\", Times, serif;\">And to help you avoid some of the early pitfalls I encountered, I’ll take you through a step-by-step guide to learn how to write a great post, drawing from my own experience as well as expert insights from top bloggers. Get ready to take notes!</span></p>\r\n<h1 style=\"text-align:start;\"><span style=\"color: rgb(36,36,36);background-color: rgb(255,255,255);font-size: 24px;font-family: sohne, \"Helvetica Neue\", Helvetica, Arial, sans-serif;\"><strong>How to Write a Blog Post, Step 1: Choosing a Blog Topic and Niche</strong></span></h1>\r\n<p style=\"text-align:start;\"><span style=\"color: rgb(36,36,36);background-color: rgb(255,255,255);font-size: 20px;font-family: source-serif-pro, Georgia, Cambria, \"Times New Roman\", Times, serif;\">The first step to writing an amazing blog post that you want to read is choosing a compelling topic. This might seem obvious, but deciding on a specific blog niche and zeroing in on topics and angles within that niche can be tricky.</span></p>\r\n<p style=\"text-align:start;\"><span style=\"color: rgb(36,36,36);background-color: rgb(255,255,255);font-size: 20px;font-family: source-serif-pro, Georgia, Cambria, \"Times New Roman\", Times, serif;\">When I started my blog, I made the mistake of trying to cover too many unrelated topics. From productivity tips to book reviews to travel stories, my blog lacked focus. It felt more like a personal diary than a platform providing value to readers. I also needed to make it easier to read.</span></p>\r\n<p style=\"text-align:start;\"><span style=\"color: rgb(36,36,36);background-color: rgb(255,255,255);font-size: 20px;font-family: source-serif-pro, Georgia, Cambria, \"Times New Roman\", Times, serif;\">I wish I had sat down early on and asked myself:</span>&nbsp;</p>\r\n', 'Public\\image-1737029520333-957069798.png', 'http://192.168.29.162:4000/images/image-1737029520333-957069798.png', '2025-01-16 17:42:00'),
(11, '1', '55+ Most Popular Blog Examples You Need to Check Out for Inspiration', 'Download blog post templates', '<p style=\"text-align:left;\"><span style=\"color: rgb(54,52,77);font-size: 20px;font-family: Muli, sans-serif;\">A</span> <a href=\"https://www.hostinger.in/tutorials/what-is-a-blog\" target=\"_self\"><span style=\"color: rgb(103,71,199);background-color: transparent;font-size: 20px;font-family: Muli, sans-serif;\">blog</span></a> <span style=\"color: rgb(54,52,77);font-size: 20px;font-family: Muli, sans-serif;\">is a website or page that is a part of a larger website. Typically, it features articles written in a conversational style with accompanying pictures or videos.</span></p>\r\n<p style=\"text-align:left;\"><span style=\"color: rgb(54,52,77);font-size: 20px;font-family: Muli, sans-serif;\">Blogging has</span> <a href=\"https://firstsiteguide.com/blogging-stats/\" target=\"_blank\"><span style=\"color: rgb(103,71,199);background-color: transparent;font-size: 20px;font-family: Muli, sans-serif;\">gained immense popularity</span></a> <span style=\"color: rgb(54,52,77);font-size: 20px;font-family: Muli, sans-serif;\">due to its enjoyable and adaptable nature, allowing for self-expression and social connections. In addition, it serves as a platform for enhancing writing skills and promoting businesses.</span></p>\r\n<p style=\"text-align:left;\"><span style=\"color: rgb(54,52,77);font-size: 20px;font-family: Muli, sans-serif;\">Furthermore, a professional blogger can even</span> <a href=\"https://www.hostinger.in/tutorials/make-money-blogging/\" target=\"_self\"><span style=\"color: rgb(103,71,199);background-color: transparent;font-size: 20px;font-family: Muli, sans-serif;\">make money from blogging</span></a> <span style=\"color: rgb(54,52,77);font-size: 20px;font-family: Muli, sans-serif;\">in various ways, such as Google ads and Amazon affiliate links. Successful blogs can cover any topic. No matter what subject you can think of, there’s likely already a profitable blog dedicated to it.</span></p>\r\n<p style=\"text-align:left;\"><span style=\"color: rgb(54,52,77);font-size: 20px;font-family: Muli, sans-serif;\">If there is none, this is where you come in. New bloggers who can find a unique niche to create content about have a higher chance of surviving in the competitive blogging world. Preferably, you should be passionate about or an expert in your blog niche. However, don’t worry if you are having a difficult time pinning down a topic – this article will help you.</span></p>\r\n<p style=\"text-align:left;\"><span style=\"color: rgb(54,52,77);font-size: 20px;font-family: Muli, sans-serif;\">In this article, we will explore 11 types of blogs in different niche industries, including tech, lifestyle, beauty and fashion, health and fitness, education, business and marketing, finance and investment, food, travel, photography, and art and design.</span></p>\r\n<p style=\"text-align:left;\"><span style=\"color: rgb(54,52,77);font-size: 20px;font-family: Muli, sans-serif;\">We will include five of the best blog examples for each type, discuss each blog example briefly, and highlight what we can learn from the blog. We will also include the info on how it is build, for example, whether a CMS like</span> <a href=\"https://www.hostinger.in/tutorials/what-is-wordpress\" target=\"_self\"><span style=\"color: rgb(103,71,199);background-color: transparent;font-size: 20px;font-family: Muli, sans-serif;\">WordPress</span></a> <span style=\"color: rgb(54,52,77);font-size: 20px;font-family: Muli, sans-serif;\">was used or a blogging platform.</span>&nbsp;</p>\r\n', 'Public\\image-1737030148181-115983422.jpg', 'http://192.168.29.162:4000/images/image-1737030148181-115983422.jpg', '2025-01-16 17:52:28'),
(12, '1', '40 Engaging Types Of Blog Posts & Content You Can Create', 'Hey Hi How Are You', '<p style=\"text-align:start;\"><span style=\"color: rgb(20,20,20);background-color: rgb(255,255,255);font-size: 17px;font-family: Open Sans\", sans-serif;\">There will always be a time during your blogging journey when you just don’t know what to write about.</span></p>\r\n<p style=\"text-align:start;\"><span style=\"color: rgb(20,20,20);background-color: rgb(255,255,255);font-size: 17px;font-family: Open Sans\", sans-serif;\">Whether it’s</span> <a href=\"https://bloggingwizard.com/overcome-writers-block/\" target=\"_blank\"><span style=\"color: var(--global-palette-highlight);background-color: transparent;font-size: 17px;font-family: Open Sans\", sans-serif;\">writer’s block</span></a> <span style=\"color: rgb(20,20,20);background-color: rgb(255,255,255);font-size: 17px;font-family: Open Sans\", sans-serif;\">rearing its ugly head, or you’re simply out of ideas, it can be hard to get out of that funk.</span></p>\r\n<p style=\"text-align:start;\"><span style=\"color: rgb(20,20,20);background-color: rgb(255,255,255);font-size: 17px;font-family: Open Sans\", sans-serif;\">Instead of pushing through with the same old blog post, utilise a bit of creative thinking to turn the ordinary on its head.</span></p>\r\n<p style=\"text-align:start;\"><span style=\"color: rgb(20,20,20);background-color: rgb(255,255,255);font-size: 17px;font-family: Open Sans\", sans-serif;\">Here are 40 different types of blog posts &amp; content you can publish:</span>&nbsp;</p>\r\n', 'Public\\image-1737030293735-156724991.png', 'http://192.168.29.162:4000/images/image-1737030293735-156724991.png', '2025-01-16 17:54:53');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `blog_content`
--
ALTER TABLE `blog_content`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `blog_content`
--
ALTER TABLE `blog_content`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
