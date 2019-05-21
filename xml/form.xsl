<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
  <xsl:template match="/">
    <xsl:variable name="email" select="//email"/>
    <xsl:variable name="name" select="//name"/>
    <xsl:variable name="asunto" select="//asunto"/>
    
    <html>
      <link rel="stylesheet" type="text/css" href="../css/form.css"/>
      <body>
      
        <h1>Contacto</h1>
        <p>¡Contacta con nosotros!</p>
        
        <form method="POST">
        
          <table>
            <tr><td>Email:</td><td><input type="text" name="email" value="{$email}"></input></td></tr>
            <tr><td>Nombre:</td><td><input type="text" name="name" value="{$name}"/></td></tr>
             <tr><td>Asunto:</td><td><input type="text" name="asunto" value="{$asunto}" id="asunto"/></td></tr>
            <tr><td></td><td><input type="submit" value="Enviar"/></td></tr>
        </table>
        </form>
      </body>
      
    </html>
    
  </xsl:template>
</xsl:stylesheet>
