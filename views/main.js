let two = new Two({
  fullscreen: true,
  autostart: true
}).appendTo(document.body);

let rec3 = two.makeRectangle(two.width / 2, two.height / 2, 275, 275);
rec3.fill = 'black';
rec3.stroke = 'white';
rec3.linewidth = 10;

let rec2 = two.makeRectangle(two.width / 2, two.height / 2, 175, 175);
rec2.fill = 'black';
rec2.stroke = 'white';
rec2.linewidth = 10;

let rec1 = two.makeRectangle(two.width / 2, two.height / 2, 100, 100);
rec1.fill = 'black';
rec1.stroke = 'white';
rec1.linewidth = 10;

let rec0 = two.makeRectangle(two.width / 2, two.height / 2, 50, 50);
rec0.fill = 'black';
rec0.stroke = 'white';
rec0.linewidth = 10;

two.bind('update', function() {
  rec0.rotation += 0.04;
  rec1.rotation += 0.03;
  rec2.rotation += 0.02;
  rec3.rotation += 0.01;
});