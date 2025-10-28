
window.onload = function(GenerarExcusa) {
  const who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
  const action = ['ate', 'peed', 'crushed', 'broke'];
  const what = ['my homework', 'my phone', 'the car'];
  const when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

  const sujeto = who[Math.floor(Math.random() * who.length)];
  const accion = action[Math.floor(Math.random() * action.length)];
  const objeto = what[Math.floor(Math.random() * what.length)];
  const lugar = when[Math.floor(Math.random() * when.length)];

  const excusa = `${sujeto} ${accion} ${objeto} ${lugar}.`;
document.getElementById("excusa").textContent = excusa;
};