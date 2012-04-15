var tests = [
	[ 'htm', '<a href="">HTML</a> <!-- comment --> &amp;', '<span class="jush"><span class="jush-tag"><span class="jush-op">&lt;</span><a href="http://www.w3.org/TR/html4/struct/links.html#edef-A">a</a><span class="jush-att"><span class="jush-op"> </span><a href="http://www.w3.org/TR/html4/struct/links.html#adef-href">href</a><span class="jush-att_quo"><span class="jush-op">="</span><span class="jush-op">"</span></span></span><span class="jush-op">&gt;</span></span>HTML<span class="jush-tag"><span class="jush-op">&lt;</span>/a<span class="jush-op">&gt;</span></span> <span class="jush-htm_com"><span class="jush-op">&lt;!--</span> comment <span class="jush-op">--&gt;</span></span> <span class="jush-ent"><span class="jush-op">&amp;</span>amp<span class="jush-op">;</span></span></span>' ],
	[ 'htm', '<a href="" onclick="alert(\'\');">', '<span class="jush"><span class="jush-tag"><span class="jush-op">&lt;</span><a href="http://www.w3.org/TR/html4/struct/links.html#edef-A">a</a><span class="jush-att"><span class="jush-op"> </span><a href="http://www.w3.org/TR/html4/struct/links.html#adef-href">href</a><span class="jush-att_quo"><span class="jush-op">="</span><span class="jush-op">"</span></span></span><span class="jush-att_js"><span class="jush-op"> </span><a href="http://www.w3.org/TR/html4/interact/scripts.html#adef-onclick">onclick</a><span class="jush-op">=</span><span class="jush-att_quo"><span class="jush-op">"</span><span class="jush-js_code"><a href="https://developer.mozilla.org/en/DOM/window.alert">alert</a><span class="jush-op">(</span></span><span class="jush-js_code"><span class="jush-apo"><span class="jush-op">\'</span><span class="jush-op">\'</span></span>)<span class="jush-op">;</span></span><span class="jush-op">"</span></span></span><span class="jush-op">&gt;</span></span></span>' ],
	[ 'htm', '<a href="" style="color: red;">', '<span class="jush"><span class="jush-tag"><span class="jush-op">&lt;</span><a href="http://www.w3.org/TR/html4/struct/links.html#edef-A">a</a><span class="jush-att"><span class="jush-op"> </span><a href="http://www.w3.org/TR/html4/struct/links.html#adef-href">href</a><span class="jush-att_quo"><span class="jush-op">="</span><span class="jush-op">"</span></span></span><span class="jush-att_css"><span class="jush-op"> </span><a href="http://www.w3.org/TR/html4/present/styles.html#adef-style">style</a><span class="jush-op">=</span><span class="jush-att_quo"><span class="jush-op">"</span><span class="jush-css_val"><a href="http://www.w3.org/TR/CSS21/colors.html#propdef-color">color</a><span class="jush-op">:</span> red<span class="jush-op">;</span></span><span class="jush-op">"</span></span></span><span class="jush-op">&gt;</span></span></span>' ],
	[ 'htm', '<script type="text/javascript">alert("");</script> SCRIPT', '<span class="jush"><span class="jush-tag_js"><span class="jush-op">&lt;</span><a href="http://www.w3.org/TR/html4/interact/scripts.html#edef-SCRIPT">script</a><span class="jush-att"><span class="jush-op"> </span><a href="http://www.w3.org/TR/html4/interact/scripts.html#adef-type-SCRIPT">type</a><span class="jush-att_quo"><span class="jush-op">="</span>text/javascript<span class="jush-op">"</span></span></span><span class="jush-js"><span class="jush-op">&gt;</span><span class="jush-js_code"><a href="https://developer.mozilla.org/en/DOM/window.alert">alert</a><span class="jush-op">(</span></span><span class="jush-js_code"><span class="jush-quo"><span class="jush-op">"</span><span class="jush-op">"</span></span>)<span class="jush-op">;</span></span><span class="jush-js_code"><span class="jush-op">&lt;</span>/script<span class="jush-op">&gt;</span></span></span></span> SCRIPT</span>' ],
	[ 'htm', '<style type="text/css">a { color: red; }</style> STYLE', '<span class="jush"><span class="jush-tag_css"><span class="jush-op">&lt;</span><a href="http://www.w3.org/TR/html4/present/styles.html#edef-STYLE">style</a><span class="jush-att"><span class="jush-op"> </span><a href="http://www.w3.org/TR/html4/present/styles.html#adef-type-STYLE">type</a><span class="jush-att_quo"><span class="jush-op">="</span>text/css<span class="jush-op">"</span></span></span><span class="jush-css"><span class="jush-op">&gt;</span>a <span class="jush-css_pro"><span class="jush-op">{</span><span class="jush-css_val"><span class="jush-op"> </span><a href="http://www.w3.org/TR/CSS21/colors.html#propdef-color">color</a><span class="jush-op">:</span> red<span class="jush-op">;</span></span> <span class="jush-op">}</span></span><span class="jush-op">&lt;</span>/style<span class="jush-op">&gt;</span></span></span> STYLE</span>' ],
	[ 'htm', '<a href=index.php title=\'Quoting\'>', '<span class="jush"><span class="jush-tag"><span class="jush-op">&lt;</span><a href="http://www.w3.org/TR/html4/struct/links.html#edef-A">a</a><span class="jush-att"><span class="jush-op"> </span><a href="http://www.w3.org/TR/html4/struct/links.html#adef-href">href</a><span class="jush-att_val"><span class="jush-op">=</span>index.php</span></span><span class="jush-att"><span class="jush-op"> </span><a href="http://www.w3.org/TR/html4/struct/global.html#adef-title">title</a><span class="jush-att_apo"><span class="jush-op">=\'</span>Quoting<span class="jush-op">\'</span></span></span><span class="jush-op">&gt;</span></span></span>' ],
	[ 'htm', '<meta http-equiv="Content-Type" content="text/html; charset=utf-8">', '<span class="jush"><span class="jush-tag"><span class="jush-op">&lt;</span><a href="http://www.w3.org/TR/html4/struct/global.html#edef-META">meta</a><span class="jush-att_http"><span class="jush-op"> </span><a href="http://www.w3.org/TR/html4/struct/global.html#adef-http-equiv">http-equiv</a><span class="jush-op">=</span><span class="jush-att_quo"><span class="jush-op">"</span><a href="http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.17">Content-Type</a><span class="jush-op">"</span></span></span><span class="jush-att"><span class="jush-op"> </span><a href="http://www.w3.org/TR/html4/struct/global.html#adef-content">content</a><span class="jush-att_quo"><span class="jush-op">="</span>text/html; charset=utf-8<span class="jush-op">"</span></span></span><span class="jush-op">&gt;</span></span></span>' ],
	
	[ 'tag', 'title=""', '<span class="jush"><span class="jush-att"><a href="http://www.w3.org/TR/html4/struct/global.html#adef-title">title</a><span class="jush-att_quo"><span class="jush-op">="</span><span class="jush-op">"</span></span></span></span>' ],
	
	[ 'xml', '<rss version="0.91">', '<span class="jush"><span class="jush-xml_tag"><span class="jush-op">&lt;</span>rss<span class="jush-xml_att"><span class="jush-op"> </span>version<span class="jush-att_quo"><span class="jush-op">="</span>0.91<span class="jush-op">"</span></span></span><span class="jush-op">&gt;</span></span></span>' ],
	
	[ 'css', 'a { color: red } /* </style> comment */ b { font-weight: bold; color: black; }', '<span class="jush">a <span class="jush-css_pro"><span class="jush-op">{</span><span class="jush-css_val"><span class="jush-op"> </span><a href="http://www.w3.org/TR/CSS21/colors.html#propdef-color">color</a><span class="jush-op">:</span> red <span class="jush-op">}</span></span></span> <span class="jush-com"><span class="jush-op">/*</span> &lt;/style&gt; comment <span class="jush-op">*/</span></span> b <span class="jush-css_pro"><span class="jush-op">{</span><span class="jush-css_val"><span class="jush-op"> </span><a href="http://www.w3.org/TR/CSS21/fonts.html#propdef-font-weight">font-weight</a><span class="jush-op">:</span> bold<span class="jush-op">;</span></span><span class="jush-css_val"><span class="jush-op"> </span><a href="http://www.w3.org/TR/CSS21/colors.html#propdef-color">color</a><span class="jush-op">:</span> black<span class="jush-op">;</span></span> <span class="jush-op">}</span></span></span>' ],
	
	[ 'js', 'if (/.+@.+/.test(email)) { /* </script> */ alert(email); }', '<span class="jush"><span class="jush-js_code"><a href="https://developer.mozilla.org/en/JavaScript/Reference/Statements/if...else">if</a> <span class="jush-op">(</span></span><span class="jush-js_reg"><span class="jush-op">/</span>.+@.+<span class="jush-op">/</span></span><span class="jush-js_code"><span class="jush-op">.</span></span><span class="jush-js_code"><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/RegExp/test">test</a><span class="jush-op">(</span></span><span class="jush-js_code">email)) <span class="jush-op">{</span></span><span class="jush-js_code"> <span class="jush-com"><span class="jush-op">/*</span> &lt;/script&gt; <span class="jush-op">*/</span></span> <a href="https://developer.mozilla.org/en/DOM/window.alert">alert</a><span class="jush-op">(</span></span><span class="jush-js_code">email)<span class="jush-op">;</span></span><span class="jush-js_code"> }</span></span>' ],
	[ 'js', '/[/\\]]/.test("/");', '<span class="jush"><span class="jush-js_reg"><span class="jush-op">/</span><span class="jush-js_reg_bra"><span class="jush-op">[</span>/<span class="jush-esc"><span class="jush-op">\\</span><span class="jush-op">]</span></span><span class="jush-op">]</span></span><span class="jush-op">/</span></span><span class="jush-js_code"><span class="jush-op">.</span></span><span class="jush-js_code"><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/RegExp/test">test</a><span class="jush-op">(</span></span><span class="jush-js_code"><span class="jush-quo"><span class="jush-op">"</span>/<span class="jush-op">"</span></span>)<span class="jush-op">;</span></span></span>' ],
	
	[ 'htm', '<?php echo "<a href=\'$href\'>";', '<span class="jush"><span class="jush-php"><span class="jush-op">&lt;?php</span> <span class="jush-php_echo"><a href="http://www.php.net/function.echo">echo</a> <span class="jush-php_quo"><span class="jush-op">"</span><span class="jush-tag"><span class="jush-op">&lt;</span><a href="http://www.w3.org/TR/html4/struct/links.html#edef-A">a</a><span class="jush-att"><span class="jush-op"> </span><a href="http://www.w3.org/TR/html4/struct/links.html#adef-href">href</a><span class="jush-att_apo"><span class="jush-op">=\'</span></span></span></span><span class="jush-php_var">$href</span><span class="jush-tag"><span class="jush-att"><span class="jush-att_apo"><span class="jush-op">\'</span></span></span><span class="jush-op">&gt;</span></span><span class="jush-op">"</span></span><span class="jush-op">;</span></span></span></span>' ],
	[ 'php', 'echo "Test" . $_SERVER["PHP_SELF"]; /* ?> comment */ mysql_free_result($result);', '<span class="jush"><span class="jush-php_echo"><a href="http://www.php.net/function.echo">echo</a> <span class="jush-php_quo"><span class="jush-op">"</span>Test<span class="jush-op">"</span></span> . <span class="jush-php_var"><a href="http://www.php.net/reserved.variables.server">$_SERVER</a></span>[<span class="jush-php_quo"><span class="jush-op">"</span>PHP_SELF<span class="jush-op">"</span></span>]<span class="jush-op">;</span></span> <span class="jush-php_com"><span class="jush-op">/*</span> ?&gt; comment <span class="jush-op">*/</span></span> <a href="http://www.php.net/function.mysql_free_result">mysql_free_result</a>(<span class="jush-php_var">$result</span>);</span>' ],
	[ 'php', 'mysql_query("SELECT 1");', '<span class="jush"><span class="jush-php_sql"><a href="http://www.php.net/function.mysql_query">mysql_query</a><span class="jush-op">(</span><span class="jush-php_quo"><span class="jush-op">"</span><span class="jush-sql_code"><a href="http://dev.mysql.com/doc/mysql/en/select.html">SELECT</a> <span class="jush-num"><span class="jush-op">1</span></span></span><span class="jush-op">"</span></span><span class="jush-op">)</span></span>;</span>' ],
	[ 'php', '/** @return bool */ ini_set("display_errors", true);', '<span class="jush"><span class="jush-php_doc"><span class="jush-op">/**</span> <a href="http://manual.phpdoc.org/HTMLSmartyConverter/HandS/phpDocumentor/tutorial_tags.return.pkg.html">@return</a> bool <span class="jush-op">*/</span></span> <span class="jush-php_phpini"><a href="http://www.php.net/function.ini_set">ini_set</a><span class="jush-op">(</span><span class="jush-php_quo"><span class="jush-op">"</span><a href="http://www.php.net/errorfunc.configuration#ini.display-errors">display_errors</a><span class="jush-op">"</span></span><span class="jush-op">,</span></span> true);</span>' ],
	[ 'php', 'header("HTTP/1.1 404 Not Found");', '<span class="jush"><span class="jush-php_http"><a href="http://www.php.net/function.header">header</a><span class="jush-op">(</span><span class="jush-php_quo"><span class="jush-op">"</span>HTTP/1.1 <a href="http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.4.5">404 Not Found</a><span class="jush-op">"</span></span><span class="jush-op">)</span></span>;</span>' ],
	[ 'php', 'header("Content-Type: text/html; charset=utf-8");', '<span class="jush"><span class="jush-php_http"><a href="http://www.php.net/function.header">header</a><span class="jush-op">(</span><span class="jush-php_quo"><span class="jush-op">"</span><a href="http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.17">Content-Type</a>: text/html; charset=utf-8<span class="jush-op">"</span></span><span class="jush-op">)</span></span>;</span>' ],
	[ 'php', 'mail("", "", "", "From: info@example.com\\nMIME-Version: 1.0");', '<span class="jush"><span class="jush-php_mail"><a href="http://www.php.net/function.mail">mail</a><span class="jush-op">(</span><span class="jush-php_quo"><span class="jush-op">"</span><span class="jush-op">"</span></span>, <span class="jush-php_quo"><span class="jush-op">"</span><span class="jush-op">"</span></span>, <span class="jush-php_quo"><span class="jush-op">"</span><span class="jush-op">"</span></span>, <span class="jush-php_quo"><span class="jush-op">"</span><a href="http://tools.ietf.org/html/rfc2076#section-3.4">From</a>: info@example.com<span class="jush-esc"><span class="jush-op">\\</span><span class="jush-op">n</span></span><a href="http://tools.ietf.org/html/rfc2076#section-3.3">MIME-Version</a>: 1.0<span class="jush-op">"</span></span><span class="jush-op">)</span></span>;</span>' ],
	
	[ 'sql', 'SELECT 1, \'MySQL\'', '<span class="jush"><span class="jush-sql_code"><a href="http://dev.mysql.com/doc/mysql/en/select.html">SELECT</a> <span class="jush-num"><span class="jush-op">1</span></span>, <span class="jush-sql_apo"><span class="jush-op">\'</span>MySQL<span class="jush-op">\'</span></span></span></span>' ],
	[ 'sqlite', 'SELECT 1, \'SQLite\'', '<span class="jush"><a href="http://www.sqlite.org/lang_select.html">SELECT</a> <span class="jush-num"><span class="jush-op">1</span></span>, <span class="jush-sqlite_apo"><span class="jush-op">\'</span>SQLite<span class="jush-op">\'</span></span></span>' ],
	[ 'pgsql', 'SELECT 1, \'PostgreSQL\'', '<span class="jush"><a href="http://www.postgresql.org/docs/current/static/sql-select.html">SELECT</a> <span class="jush-num"><span class="jush-op">1</span></span>, <span class="jush-sql_apo"><span class="jush-op">\'</span>PostgreSQL<span class="jush-op">\'</span></span></span>' ],
	[ 'mssql', 'SELECT 1, \'MS SQL\'', '<span class="jush"><a href="http://msdn.microsoft.com/library/ms189499.aspx">SELECT</a> <span class="jush-num"><span class="jush-op">1</span></span>, <span class="jush-sqlite_apo"><span class="jush-op">\'</span>MS SQL<span class="jush-op">\'</span></span></span>' ],
	
	[ 'sql', 'SET foreign_key_checks = 0', '<span class="jush"><span class="jush-sql_sqlset"><a href="http://dev.mysql.com/doc/mysql/en/set-option.html">SET</a><span class="jush-op"> </span><a href="http://dev.mysql.com/doc/mysql/en/server-session-variables.html#sysvar_foreign_key_checks">foreign_key_checks</a> <span class="jush-sqlset_val"><span class="jush-op">=</span> <span class="jush-num"><span class="jush-op">0</span></span></span></span></span>' ],
	[ 'sqlstatus', 'Qcache_hits', '<span class="jush"><a href="http://dev.mysql.com/doc/mysql/en/server-status-variables.html#statvar_Qcache_hits">Qcache_hits</a></span>' ],
	
	[ 'cnf', 'Listen 80\nphp_flag display_errors On', '<span class="jush"><a href="http://httpd.apache.org/docs/current/mod/mpm_common.html#listen">Listen</a> 80<span class="jush-cnf_phpini"><span class="jush-op">\n</span><a href="http://www.php.net/configuration.changes#configuration.changes.apache">php_flag</a><span class="jush-op"> </span><a href="http://www.php.net/errorfunc.configuration#ini.display-errors">display_errors</a><span class="jush-cnf_phpini_val"><span class="jush-op"> </span>On</span></span></span>' ]
];

var html = [ ];
for (var i=0; i < tests.length; i++) {
	var test = tests[i];
	var highlighted = jush.highlight(test[0], test[1]);
	html.push((highlighted != test[2] ? '<b class="error">error</b>' : '') + '<pre class="jush-' + test[0] + '">' + highlighted + '</pre>');
}
document.getElementById('result').innerHTML = html.join('\n');
