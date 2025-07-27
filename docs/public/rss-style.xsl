<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:atom="http://www.w3.org/2005/Atom">
  <xsl:output method="html" encoding="UTF-8" indent="yes"/>
  
  <xsl:template match="/">
    <html lang="en">
      <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>ZeAPI Documentation Updates</title>
        <style>
          :root {
            --primary-color: #3eaf7c;
            --secondary-color: #2c3e50;
            --light-bg: #f8f9fa;
            --dark-bg: #1a1a1a;
            --text-light: #333;
            --text-dark: #f0f0f0;
            --border-color: #e0e0e0;
            --card-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          }
          
          * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
          }
          
          body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            line-height: 1.6;
            background-color: var(--light-bg);
            color: var(--text-light);
            padding: 1rem;
          }
          
          body.dark-mode {
            background-color: var(--dark-bg);
            color: var(--text-dark);
          }
          
          .container {
            max-width: 800px;
            margin: 0 auto;
            padding: 2rem;
          }
          
          header {
            text-align: center;
            margin-bottom: 2rem;
            padding-bottom: 1rem;
            border-bottom: 1px solid var(--border-color);
          }
          
          .logo {
            width: 80px;
            height: 80px;
            margin: 0 auto 1rem;
            border-radius: 50%;
            background-color: var(--primary-color);
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 2rem;
            font-weight: bold;
          }
          
          h1 {
            color: var(--primary-color);
            margin-bottom: 0.5rem;
          }
          
          .description {
            color: #666;
            margin-bottom: 1rem;
          }
          
          .dark-mode .description {
            color: #aaa;
          }
          
          .subscribe-btn {
            display: inline-block;
            background-color: var(--primary-color);
            color: white;
            padding: 0.5rem 1rem;
            border-radius: 4px;
            text-decoration: none;
            font-weight: bold;
            margin-top: 0.5rem;
          }
          
          .subscribe-btn:hover {
            background-color: #2d8b5f;
          }
          
          .theme-switch {
            position: absolute;
            top: 1rem;
            right: 1rem;
            background: none;
            border: none;
            cursor: pointer;
            font-size: 1.2rem;
            color: var(--text-light);
          }
          
          .dark-mode .theme-switch {
            color: var(--text-dark);
          }
          
          .feed-item {
            background: white;
            border-radius: 8px;
            padding: 1.5rem;
            margin-bottom: 1.5rem;
            box-shadow: var(--card-shadow);
          }
          
          .dark-mode .feed-item {
            background: #2a2a2a;
          }
          
          .feed-item h2 {
            margin-bottom: 0.5rem;
          }
          
          .feed-item h2 a {
            color: var(--secondary-color);
            text-decoration: none;
          }
          
          .dark-mode .feed-item h2 a {
            color: #8ab4f8;
          }
          
          .feed-item h2 a:hover {
            text-decoration: underline;
          }
          
          .meta {
            display: flex;
            gap: 1rem;
            margin-bottom: 1rem;
            font-size: 0.9rem;
            color: #666;
          }
          
          .dark-mode .meta {
            color: #aaa;
          }
          
          .content {
            margin-bottom: 1rem;
          }
          
          .content img {
            max-width: 100%;
            height: auto;
            border-radius: 4px;
            margin: 0.5rem 0;
          }
          
          .read-more {
            display: inline-block;
            color: var(--primary-color);
            font-weight: bold;
            text-decoration: none;
          }
          
          .read-more:hover {
            text-decoration: underline;
          }
          
          footer {
            text-align: center;
            margin-top: 2rem;
            padding-top: 1rem;
            border-top: 1px solid var(--border-color);
            color: #666;
            font-size: 0.9rem;
          }
          
          .dark-mode footer {
            color: #aaa;
          }
          
          @media (max-width: 600px) {
            .container {
              padding: 1rem;
            }
            
            .meta {
              flex-direction: column;
              gap: 0.3rem;
            }
          }
        </style>
        <script>
          document.addEventListener('DOMContentLoaded', function() {
            const themeSwitch = document.getElementById('theme-switch');
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            
            // 初始主题设置
            if (localStorage.getItem('theme') === 'dark' || 
                (!('theme' in localStorage) && prefersDark)) {
              document.body.classList.add('dark-mode');
              themeSwitch.textContent = '☀️';
            } else {
              themeSwitch.textContent = '🌙';
            }
            
            // 切换主题
            themeSwitch.addEventListener('click', function() {
              document.body.classList.toggle('dark-mode');
              if (document.body.classList.contains('dark-mode')) {
                localStorage.setItem('theme', 'dark');
                themeSwitch.textContent = '☀️';
              } else {
                localStorage.setItem('theme', 'light');
                themeSwitch.textContent = '🌙';
              }
            });
          });
        </script>
      </head>
      <body>
        <button id="theme-switch" class="theme-switch">🌙</button>
        <div class="container">
          <header>
            <div class="logo">Z</div>
            <h1>ZeAPI Documentation Updates</h1>
            <p class="description">
              <xsl:value-of select="/rss/channel/description"/>
            </p>
            <a href="{/rss/channel/atom:link[@rel='self']/@href}" class="subscribe-btn">
              Subscribe to RSS Feed
            </a>
          </header>
          
          <main>
            <xsl:for-each select="/rss/channel/item">
              <article class="feed-item">
                <h2>
                  <a href="{link}">
                    <xsl:value-of select="title"/>
                  </a>
                </h2>
                <div class="meta">
                  <span class="date">
                    <xsl:value-of select="pubDate"/>
                  </span>
                  <span>•</span>
                  <span class="author">
                    <xsl:value-of select="author"/>
                  </span>
                </div>
                <div class="content">
                  <xsl:value-of select="description" disable-output-escaping="yes"/>
                </div>
                <a href="{link}" class="read-more">Read full article →</a>
              </article>
            </xsl:for-each>
          </main>
          
          <footer>
            <p>Generated by ZeAPI Documentation • © <xsl:value-of select="substring(/rss/channel/copyright, string-length(/rss/channel/copyright) - 3)"/> ZeAPI Team</p>
            <p>
              <a href="{/rss/channel/link}">View Full Documentation</a>
            </p>
          </footer>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet