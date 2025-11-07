<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:sm="http://www.sitemaps.org/schemas/sitemap/0.9"
                exclude-result-prefixes="sm">

    <xsl:output method="html" indent="yes"/>

    <xsl:template match="/">
        <html>
            <head>
                <title>Sitemap</title>
                <style>
                    body {
                    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
                    background: #fafafa;
                    color: #333;
                    padding: 40px;
                    text-align: center;
                    }
                    h1 {
                    margin-bottom: 5px;
                    font-size: 2em;
                    }
                    p {
                    color: #666;
                    margin-bottom: 30px;
                    }
                    .tabs {
                    display: inline-flex;
                    justify-content: center;
                    align-items: center;
                    gap: 15px;
                    margin-bottom: 25px;
                    background: #fff;
                    border: 1px solid #ddd;
                    border-radius: 8px;
                    padding: 10px 20px;
                    box-shadow: 0 2px 4px rgba(0,0,0,0.05);
                    }
                    .tabs a {
                    color: #0070f3;
                    text-decoration: none;
                    font-weight: 500;
                    padding: 8px 14px;
                    border-radius: 4px;
                    transition: all 0.2s ease;
                    }
                    .tabs a:hover {
                    background: #0070f3;
                    color: white;
                    }
                    .tabs a.active {
                    background: #0070f3;
                    color: white;
                    }
                    .container {
                    display: flex;
                    justify-content: center;
                    }
                    table {
                    border-collapse: collapse;
                    width: 90%;
                    max-width: 900px;
                    background: #fff;
                    border-radius: 8px;
                    overflow: hidden;
                    box-shadow: 0 2px 8px rgba(0,0,0,0.05);
                    }
                    th, td {
                    border: 1px solid #ddd;
                    padding: 10px 12px;
                    text-align: left;
                    }
                    th {
                    background: #f5f5f5;
                    font-weight: 600;
                    }
                    a {
                    color: #0070f3;
                    text-decoration: none;
                    }
                    a:hover {
                    text-decoration: underline;
                    }
                </style>
            </head>
            <body>
                <h1>XML Sitemap</h1>
                <p>Generated automatically for <strong>strateger.ai</strong></p>

                <!-- 🔖 Tabs Navigation -->
                <div class="tabs">
                    <!-- Index -->
                    <a href="/sitemap-index.xml">
                        <xsl:if test="sm:sitemapindex">
                            <xsl:attribute name="class">active</xsl:attribute>
                        </xsl:if>
                        All Sitemaps
                    </a>

                    <!-- Main -->
                    <a href="/sitemap.xml">
                        <xsl:if test="sm:urlset and not(sm:urlset/sm:url[contains(sm:loc, '/services/') or contains(sm:loc, '/industries/')])">
                            <xsl:attribute name="class">active</xsl:attribute>
                        </xsl:if>
                        Main
                    </a>

                    <!-- Services -->
                    <a href="/sitemap-services.xml">
                        <xsl:if test="sm:urlset/sm:url[contains(sm:loc, '/services/')] and not(sm:urlset/sm:url[contains(sm:loc, '/industries/')])">
                            <xsl:attribute name="class">active</xsl:attribute>
                        </xsl:if>
                        Services
                    </a>

                    <!-- Industries -->
                    <a href="/sitemap-industries.xml">
                        <xsl:if test="sm:urlset/sm:url[contains(sm:loc, '/industries/')]">
                            <xsl:attribute name="class">active</xsl:attribute>
                        </xsl:if>
                        Industries
                    </a>
                </div>


                <div class="container">
                    <!-- ✅ URLSET -->
                    <xsl:if test="sm:urlset">
                        <table>
                            <tr>
                                <th>URL</th>
                                <th>Last Modified</th>
                                <th>Change Frequency</th>
                                <th>Priority</th>
                            </tr>
                            <xsl:for-each select="sm:urlset/sm:url">
                                <tr>
                                    <td><a href="{sm:loc}"><xsl:value-of select="sm:loc"/></a></td>
                                    <td><xsl:value-of select="sm:lastmod"/></td>
                                    <td><xsl:value-of select="sm:changefreq"/></td>
                                    <td><xsl:value-of select="sm:priority"/></td>
                                </tr>
                            </xsl:for-each>
                        </table>
                    </xsl:if>

                    <!-- ✅ SITEMAPINDEX -->
                    <xsl:if test="sm:sitemapindex">
                        <table>
                            <tr>
                                <th>Sitemap File</th>
                                <th>Last Modified</th>
                            </tr>
                            <xsl:for-each select="sm:sitemapindex/sm:sitemap">
                                <tr>
                                    <td><a href="{sm:loc}"><xsl:value-of select="sm:loc"/></a></td>
                                    <td><xsl:value-of select="sm:lastmod"/></td>
                                </tr>
                            </xsl:for-each>
                        </table>
                    </xsl:if>
                </div>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>


        <!--<?xml version="1.0" encoding="UTF-8"?>-->
<!--<xsl:stylesheet version="1.0"-->
<!--                xmlns:xsl="http://www.w3.org/1999/XSL/Transform"-->
<!--                xmlns:sm="http://www.sitemaps.org/schemas/sitemap/0.9"-->
<!--                exclude-result-prefixes="sm">-->
<!--    <xsl:output method="html" indent="yes"/>-->

<!--    <xsl:template match="/">-->
<!--        <html>-->
<!--            <head>-->
<!--                <title>Sitemap</title>-->
<!--                <style>-->
<!--                    body {-->
<!--                    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;-->
<!--                    background: #fafafa;-->
<!--                    color: #333;-->
<!--                    padding: 40px;-->
<!--                    text-align: center;-->
<!--                    }-->
<!--                    h1 {-->
<!--                    margin-bottom: 5px;-->
<!--                    font-size: 2em;-->
<!--                    }-->
<!--                    p {-->
<!--                    color: #666;-->
<!--                    margin-bottom: 30px;-->
<!--                    }-->
<!--                    .tabs {-->
<!--                    display: inline-flex;-->
<!--                    justify-content: center;-->
<!--                    align-items: center;-->
<!--                    gap: 15px;-->
<!--                    margin-bottom: 25px;-->
<!--                    background: #fff;-->
<!--                    border: 1px solid #ddd;-->
<!--                    border-radius: 8px;-->
<!--                    padding: 10px 20px;-->
<!--                    box-shadow: 0 2px 4px rgba(0,0,0,0.05);-->
<!--                    }-->
<!--                    .tabs a {-->
<!--                    color: #0070f3;-->
<!--                    text-decoration: none;-->
<!--                    font-weight: 500;-->
<!--                    padding: 8px 14px;-->
<!--                    border-radius: 4px;-->
<!--                    transition: all 0.2s ease;-->
<!--                    }-->
<!--                    .tabs a:hover {-->
<!--                    background: #0070f3;-->
<!--                    color: white;-->
<!--                    }-->
<!--                    .tabs a.active {-->
<!--                    background: #0070f3;-->
<!--                    color: white;-->
<!--                    }-->
<!--                    .container {-->
<!--                    display: flex;-->
<!--                    justify-content: center;-->
<!--                    }-->
<!--                    table {-->
<!--                    border-collapse: collapse;-->
<!--                    width: 90%;-->
<!--                    max-width: 900px;-->
<!--                    background: #fff;-->
<!--                    border-radius: 8px;-->
<!--                    overflow: hidden;-->
<!--                    box-shadow: 0 2px 8px rgba(0,0,0,0.05);-->
<!--                    }-->
<!--                    th, td {-->
<!--                    border: 1px solid #ddd;-->
<!--                    padding: 10px 12px;-->
<!--                    text-align: left;-->
<!--                    }-->
<!--                    th {-->
<!--                    background: #f5f5f5;-->
<!--                    font-weight: 600;-->
<!--                    }-->
<!--                    a {-->
<!--                    color: #0070f3;-->
<!--                    text-decoration: none;-->
<!--                    }-->
<!--                    a:hover {-->
<!--                    text-decoration: underline;-->
<!--                    }-->
<!--                </style>-->
<!--            </head>-->
<!--            <body>-->
<!--                <h1>XML Sitemap</h1>-->
<!--                <p>Generated automatically for <strong>strateger.ai</strong></p>-->

<!--                &lt;!&ndash; 🔖 Tabs Navigation &ndash;&gt;-->
<!--                <div class="tabs">-->
<!--                    <a href="/sitemap-index.xml">All Sitemaps</a>-->
<!--                    <a href="/sitemap.xml">Main</a>-->
<!--                    <a href="/sitemap-services.xml">Services</a>-->
<!--                    <a href="/sitemap-industries.xml">Industries</a>-->
<!--                </div>-->

<!--                <div class="container">-->
<!--                    &lt;!&ndash; ✅ URLSET &ndash;&gt;-->
<!--                    <xsl:if test="sm:urlset">-->
<!--                        <table>-->
<!--                            <tr>-->
<!--                                <th>URL</th>-->
<!--                                <th>Last Modified</th>-->
<!--                                <th>Change Frequency</th>-->
<!--                                <th>Priority</th>-->
<!--                            </tr>-->
<!--                            <xsl:for-each select="sm:urlset/sm:url">-->
<!--                                <tr>-->
<!--                                    <td><a href="{sm:loc}"><xsl:value-of select="sm:loc"/></a></td>-->
<!--                                    <td><xsl:value-of select="sm:lastmod"/></td>-->
<!--                                    <td><xsl:value-of select="sm:changefreq"/></td>-->
<!--                                    <td><xsl:value-of select="sm:priority"/></td>-->
<!--                                </tr>-->
<!--                            </xsl:for-each>-->
<!--                        </table>-->
<!--                    </xsl:if>-->

<!--                    &lt;!&ndash; ✅ SITEMAPINDEX &ndash;&gt;-->
<!--                    <xsl:if test="sm:sitemapindex">-->
<!--                        <table>-->
<!--                            <tr>-->
<!--                                <th>Sitemap File</th>-->
<!--                                <th>Last Modified</th>-->
<!--                            </tr>-->
<!--                            <xsl:for-each select="sm:sitemapindex/sm:sitemap">-->
<!--                                <tr>-->
<!--                                    <td><a href="{sm:loc}"><xsl:value-of select="sm:loc"/></a></td>-->
<!--                                    <td><xsl:value-of select="sm:lastmod"/></td>-->
<!--                                </tr>-->
<!--                            </xsl:for-each>-->
<!--                        </table>-->
<!--                    </xsl:if>-->
<!--                </div>-->
<!--            </body>-->
<!--        </html>-->
<!--    </xsl:template>-->
<!--</xsl:stylesheet>-->
