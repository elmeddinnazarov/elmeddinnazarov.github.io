(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,90261,t=>{"use strict";var e=t.i(48045),r=t.i(56008),n=t.i(95224),a=t.i(96193);t.s(["CompanyLocationMap",0,function({companies:t,positions:o,visibleSlugs:l,selectedSlug:i,onSelect:c}){let u=(0,r.useRef)(null),s=(0,r.useRef)(null),d=(0,r.useRef)(new Map),h=(0,r.useRef)(!1),f=(0,r.useRef)(c);function p(){d.current.forEach(({el:t},e)=>{let r=l.includes(e);t.style.display=r?"":"none",t.classList.toggle("company-marker--active",e===i),t.tabIndex=r?0:-1})}function m(t){let e=[];if(d.current.forEach(({marker:t},r)=>{if(l.includes(r)){let r=t.getLngLat();e.push([r.lng,r.lat])}}),0===e.length)return;if(1===e.length)return void t.flyTo({center:e[0],zoom:14,duration:800});let r=e[0][0],n=e[0][1],a=e[0][0],o=e[0][1];for(let t=1;t<e.length;t++)r=Math.min(r,e[t][0]),n=Math.min(n,e[t][1]),a=Math.max(a,e[t][0]),o=Math.max(o,e[t][1]);try{t.fitBounds([r,n,a,o],{padding:60,maxZoom:13,duration:800})}catch{}}return f.current=c,(0,r.useEffect)(()=>{if(!u.current||s.current)return;let e=new n.Map({container:u.current,style:a.BASEMAP_STYLE,center:[49.4,40.35],zoom:10,attributionControl:!1});return s.current=e,e.addControl(new n.NavigationControl({showCompass:!1}),"top-right"),e.addControl(new n.AttributionControl({compact:!0}),"bottom-right"),e.on("load",()=>{h.current=!0,t.forEach(t=>{let r=o[t.slug];if(!r)return;let a=document.createElement("button");a.type="button",a.className="company-marker",a.setAttribute("aria-label",`${t.name} — ${t.categoryLabel}`),a.innerHTML=`
          <span class="company-marker__label">${t.name}</span>
          <span class="company-marker__pin">
    <svg class="company-marker__svg" viewBox="0 0 34 44" width="32" height="41" aria-hidden="true">
      <!-- Teardrop body -->
      <path class="company-marker__body"
        d="M17 1C8.72 1 2 7.72 2 16c0 10 13 25.5 14.04 26.78a1.28 1.28 0 0 0 1.92 0C19 41.5 32 26 32 16 32 7.72 25.28 1 17 1Z" />
      <!-- White circle background -->
      <circle cx="17" cy="16" r="10.5" fill="#ffffff" />
      <!-- Brand-yellow dot accent -->
      <circle cx="17" cy="16" r="2.5" fill="#FFCA00" />
      <!-- Building outline (Lucide building-2 simplified) -->
      <g transform="translate(10.5 8.5) scale(0.75)"
         fill="none" stroke="#1884cc" stroke-width="1.8"
         stroke-linecap="round" stroke-linejoin="round">
        <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
        <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
        <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
        <path d="M10 6h4" />
        <path d="M10 10h4" />
        <path d="M10 14h4" />
        <path d="M10 18h4" />
      </g>
    </svg></span>
        `,a.addEventListener("click",e=>{e.stopPropagation(),f.current(t)});let l=new n.Marker({element:a,anchor:"bottom"}).setLngLat([r.lng,r.lat]).addTo(e);d.current.set(t.slug,{marker:l,el:a})}),p(),m(e)}),()=>{d.current.forEach(({marker:t})=>t.remove()),d.current.clear(),e.remove(),s.current=null,h.current=!1}},[]),(0,r.useEffect)(()=>{h.current&&(p(),s.current&&m(s.current))},[l,i]),(0,e.jsx)("div",{ref:u,role:"application","aria-label":"Euroline şirkətlərinin coğrafi yerləşməsini göstərən interaktiv xəritə",tabIndex:0,className:"h-full w-full"})}])},10706,t=>{t.n(t.i(90261))}]);