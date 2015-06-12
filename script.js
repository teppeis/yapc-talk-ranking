import escapeHtml from 'htmlspecialchars';
import {ranking, date as updated} from './ranking.json';

$(() => {

var YAPC_URL = 'http://yapcasia.org';

var table = $('#ranking');
var tbody = table.find('tbody');

$('#updated').text(`${new Date(updated).toISOString()} 更新`);

ranking.forEach((talk, i) => {
  var tr = document.createElement('tr');
  var url = YAPC_URL + talk.path;
  tr.innerHTML = html`<td>${i + 1}</td><td><a href="${url}">${talk.title}</a></td><td>${talk.speaker}</td><td>${talk.twitter}</td><td>${talk.hatena}</td><td>${talk.total}</td>`;
  tbody.append(tr);
});

table.tablesort();
table.find('.sort-number').data('sortBy', (th, td) => {
  return Number(td.text());
}).off('click.tablesort').on('click.tablesort', function() {
  table.data('tablesort').sort($(this), 'desc');
});
// rank
table.find('.sort-disabled').off('click.tablesort');
table.on('tablesort:complete', (e) => {
  tbody.find('tr td:first-child').each((i, td) => {
    td.textContent = i + 1;
  });
});
// default
table.data('tablesort').sort(table.find('th:last-child'), 'desc');

function html(templates, ...values) {
  // templates: ["<p>Hello, ", "${name}</p>"]
  // values: ["Bob <script>"]
  var result = "";
  for (let i = 0; i < templates.length; i++){
    result += templates[i];
    if (i < values.length){
      result += escapeHtml(values[i]);
    }
  }
  return result
}

});
