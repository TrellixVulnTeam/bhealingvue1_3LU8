<template>
  <div>
    <footer id="footer">
      <div class="footer-top">
        <div class="container"></div>
      </div>

      <div class="container">
        <div class="copyright">
          &copy; Copyright 2018
          <strong>Benevolent Healing</strong>. All Rights Reserved
        </div>
        <div class="credits">
          <a href="https://www.jsdevelopment.tech">
            <font-awesome-icon :icon="{ prefix: 'fas', iconName: 'cog' }" size="md" spin />&nbsp Website developed by JS Development
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>
<style scoped>
/*--------------------------------------------------------------
/*--------------------------------------------------------------
# Footer
--------------------------------------------------------------*/
#footer {
  background: #343b40;
  padding: 30px 0;
  color: #fff;
  font-size: 14px;
  height: 110px;
}
#footer .container {
  margin: 0 auto;
  min-height: 2vh;
  display: block;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  text-align: center;
}
#footer .copyright {
  text-align: center;
  display: block !important;
}

#footer .credits {
  padding-top: 10px;
  text-align: center;
  font-size: 13px;
  color: #ccc;
}
</style>