(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,95063,t=>{"use strict";var e=t.i(48045),r=t.i(56008),a=t.i(95224),n=t.i(96193),o=t.i(12404);t.s(["ProjectsMap",0,function({projects:t,positions:l,visibleSlugs:c,selectedSlug:i,onSelect:s}){let u=(0,r.useRef)(null),p=(0,r.useRef)(null),d=(0,r.useRef)(new Map),f=(0,r.useRef)(!1),h=(0,r.useRef)(s);function m(){d.current.forEach(({el:t},e)=>{let r=c.includes(e);t.style.display=r?"":"none",t.classList.toggle("project-marker--active",e===i),t.tabIndex=r?0:-1})}function g(t){let e=[];if(d.current.forEach(({marker:t},r)=>{if(c.includes(r)){let r=t.getLngLat();e.push([r.lng,r.lat])}}),0===e.length)return;if(1===e.length)return void t.flyTo({center:e[0],zoom:14,duration:800});let r=e[0][0],a=e[0][1],n=e[0][0],o=e[0][1];for(let t=1;t<e.length;t++)r=Math.min(r,e[t][0]),a=Math.min(a,e[t][1]),n=Math.max(n,e[t][0]),o=Math.max(o,e[t][1]);try{t.fitBounds([r,a,n,o],{padding:50,maxZoom:13,duration:800})}catch{}}return h.current=s,(0,r.useEffect)(()=>{if(!u.current||p.current)return;let e=new a.Map({container:u.current,style:n.BASEMAP_STYLE,center:[49.4,40.35],zoom:10,attributionControl:!1});return p.current=e,e.addControl(new a.NavigationControl({showCompass:!1}),"top-right"),e.addControl(new a.AttributionControl({compact:!0}),"bottom-right"),t.map(t=>[t.slug,t]),e.on("load",()=>{f.current=!0,t.forEach(t=>{let r=l[t.slug];if(!r)return;let n=(0,o.projectMarkerStatus)(t.status),c=document.createElement("button");c.type="button",c.className=`project-marker project-marker--${n}`,c.setAttribute("aria-label",`${t.title} — ${t.statusLabel}`),c.style.setProperty("--marker-color",o.STATUS_COLOR[n]),c.innerHTML=`
          <span class="project-marker__label">${t.title} \xb7 ${t.year}</span>
          <span class="project-marker__pulse" aria-hidden="true"></span>
          <span class="project-marker__pin">
    <svg class="project-marker__svg" viewBox="0 0 32 42" width="30" height="39" aria-hidden="true">
      <path class="project-marker__body"
        d="M16 1C8.27 1 2 7.27 2 15c0 9.5 12 24.5 13.03 25.77a1.25 1.25 0 0 0 1.94 0C18 39.5 30 24.5 30 15 30 7.27 23.73 1 16 1Z" />
      <circle cx="16" cy="15" r="10" fill="#ffffff" />
      <g transform="translate(6.4 5.4) scale(0.8)"
        fill="none" stroke="#111820" stroke-width="2"
        stroke-linecap="round" stroke-linejoin="round">
        <path d="M2 18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1z" />
        <path d="M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5" />
        <path d="M4 15v-3a6 6 0 0 1 6-6" />
        <path d="M14 6a6 6 0 0 1 6 6v3" />
      </g>
    </svg></span>
        `,c.addEventListener("click",e=>{e.stopPropagation(),h.current(t)});let i=new a.Marker({element:c,anchor:"bottom"}).setLngLat([r.lng,r.lat]).addTo(e);d.current.set(t.slug,{marker:i,el:c})}),m(),g(e)}),()=>{d.current.forEach(({marker:t})=>t.remove()),d.current.clear(),e.remove(),p.current=null,f.current=!1}},[]),(0,r.useEffect)(()=>{f.current&&(m(),p.current&&g(p.current))},[c,i]),(0,e.jsx)("div",{ref:u,role:"application","aria-label":"Azərbaycan üzrə Euroline layihələrinin interaktiv xəritəsi",tabIndex:0,className:"h-full w-full"})}])},39043,t=>{t.n(t.i(95063))}]);