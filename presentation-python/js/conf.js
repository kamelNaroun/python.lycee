function r(f){/loaded|complete/.test(document.readyState)?f():setTimeout("r("+f+")",9);}
function go() {
    var body = document.getElementsByTagName('body')[0];
    var e = document.createElement('p');
    e.setAttribute('class', 'cop');
    e.innerHTML =
    '<strong>Présentation de Python</strong> | '
    + ' <a href="http://python.lycee.free.fr">Débuter avec Python au lycée</a> | '
    + ' taper <code>h</code> pour une aide à la navigation';
    body.appendChild(e);
}
r(go);
