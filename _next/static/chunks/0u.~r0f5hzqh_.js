(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,17832,e=>{"use strict";var t=e.i(48045),n=e.i(56008),o=e.i(95224),r=e.i(96193);let i="https://www.google.com/maps/dir/?api=1&destination=40.3978,49.8288";e.s(["ContactMap",0,function(){let e=(0,n.useRef)(null),l=(0,n.useRef)(null);return(0,n.useEffect)(()=>{if(!e.current||l.current)return;let t=new o.Map({container:e.current,style:r.BASEMAP_STYLE,center:[49.8288,40.3978],zoom:16,attributionControl:!1});l.current=t,t.addControl(new o.NavigationControl({showCompass:!1}),"top-right"),t.addControl(new o.AttributionControl({compact:!0}),"bottom-right");let n=document.createElement("button");n.type="button",n.setAttribute("aria-label","Euroline QSC baş ofis yeri"),n.className="euroline-marker",n.innerHTML=`
      <span class="euroline-marker__dot"></span>
      <span class="euroline-marker__pulse"></span>
    `;let a=new o.Popup({offset:24,closeButton:!0,maxWidth:"240px"}).setHTML(`
      <div class="euroline-popup">
        <p class="euroline-popup__title">Euroline QSC Holding</p>
        <p class="euroline-popup__sub">Akademik Həsən Əliyev 5H, Nəsimi, Bakı</p>
        <a
          class="euroline-popup__link"
          href="${i}"
          target="_blank"
          rel="noopener noreferrer"
        >Google Maps-də a\xe7</a>
      </div>
    `);return new o.Marker({element:n}).setLngLat([49.8288,40.3978]).setPopup(a).addTo(t),()=>{t.remove(),l.current=null}},[]),(0,t.jsx)("div",{ref:e,role:"application","aria-label":"Euroline QSC baş ofisinin interaktiv xəritəsi",tabIndex:0,className:"h-full w-full"})}])},22331,e=>{e.n(e.i(17832))}]);