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
  tr.innerHTML = html`
<td>${i + 1}</td>
<td><a href="${url}">${talk.title}</a></td>
<td><a href="${talk.speaker_url}"><img class="speaker-icon" src="${talk.speaker_icon}">${talk.speaker_name}</a></td>
<td><a href="https://twitter.com/search?q=${encodeURIComponent(url)}" class="social-count">${talk.twitter}</a></td>
<td><a href="http://b.hatena.ne.jp/entry/yapcasia.org${talk.path}" class="social-count">${talk.hatena}</a></td>
<td>${talk.total}</td>`.replace(/\n/g, '');
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
