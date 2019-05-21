<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
  <xsl:template match="/">
  <html>
    <link rel="stylesheet" type="text/css" href="../css/xmlcss.css"/>
    <head>
      <title>Información</title>
    </head>
    
    <body>
     <h1>INFORMACiÓN</h1>
      <div class="main">
        <xsl:for-each select="/pagina">
          <h2><xsl:value-of select="parte[@id='1']"></xsl:value-of></h2>
        </xsl:for-each>
          <br></br>
        </div>
      
        <xsl:for-each select="/pagina">
          <xsl:value-of select="parrafo[@id='p1']"></xsl:value-of>
        </xsl:for-each>
        <br></br>
         <div class="main">
        <xsl:for-each select="/pagina">
          <h2><xsl:value-of select="parte[@id='2']"></xsl:value-of></h2>
        </xsl:for-each>
          <br></br>
          </div>
        <xsl:for-each select="/pagina">
          <xsl:value-of select="parrafo[@id='p2']"></xsl:value-of>
        </xsl:for-each>
     
    </body>
  </html>
  </xsl:template>
</xsl:stylesheet>
