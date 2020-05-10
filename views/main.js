var two = new Two({
  fullscreen: true,
  autostart: true
}).appendTo(document.body);

var rec4 = two.makeRectangle(two.width / 2, two.height / 2, 400, 400);
rec4.fill = "black";
rec4.stroke = "white";
rec4.linewidth = 10;

var rec3 = two.makeRectangle(two.width / 2, two.height / 2, 250, 250);
rec3.fill = "black";
rec3.stroke = "white";
rec3.linewidth = 10;

var rec2 = two.makeRectangle(two.width / 2, two.height / 2, 150, 150);
rec2.fill = "black";
rec2.stroke = "white";
rec2.linewidth = 10;

var rec1 = two.makeRectangle(two.width / 2, two.height / 2, 80, 80);
rec1.fill = "black";
rec1.stroke = "white";
rec1.linewidth = 10;

var rec0 = two.makeRectangle(two.width / 2, two.height / 2, 30, 30);
rec0.fill = "black";
rec0.stroke = "white";
rec0.linewidth = 10;

two.bind("update", function() {
  rec0.rotation += 0.03;
  rec1.rotation += 0.025;
  rec2.rotation += 0.02;
  rec3.rotation += 0.015;
  rec4.rotation += 0.01
});
