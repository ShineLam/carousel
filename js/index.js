avalon.ready(function() {
  var vm = avalon.define({
    $id: 'carousel',
    cur: 0,
    move: false,
    imgsList: [{
      url: './imgs/01.jpg'
    }, {
      url: './imgs/02.jpg'
    }, {
      url: './imgs/03.jpg'
    }],
    "left": function() {
      vm.move = !vm.move
    },
    "loop": function() {
      var cur = vm.imgsList.length - 1
      if (vm.cur) {
        vm.cur--
      } else {
        vm.cur = cur
      }
    },
    "jump": function(idx) {
      vm.cur = idx
    },
  })

  setInterval(function() {
    vm.loop()
  }, 3000)
  avalon.scan(document.body)
})
