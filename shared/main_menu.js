'use strict'
zuix.controller((cp) => {
    cp.create = ()=>{
        cp.field('btn-settings')
            .on('click', (e, el)=>{
                drawerLayout.close();
                showSetupPage();
            });
    };
});




zuix.using('style', '//zuixjs.github.io/zkit/css/flex-layout-attribute.min.css');
zuix.using('style', '//code.getmdl.io/1.3.0/material.red-amber.min.css');
zuix.using('style', '//code.getmdl.io/1.3.0/material.min.js');
zuix.using('style', './index.css');

