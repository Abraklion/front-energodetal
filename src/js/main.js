import MapComponent from "./components/map.component";

new MapComponent('map', {
  create: 'iframe'
})

// https://fancyapps.com/fancybox/getting-started
Fancybox.bind('[data-fancybox]', {
  groupAll: true
});

