document.write("");

document.write("<!--header start-->");
document.write("<header class=\"header white-bg\">");
document.write("<div class=\"navbar-header white-bg\">");
document.write("<button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">");
document.write("<span class=\"fa fa-bars\"></span>");
document.write("</button>");
document.write("<!--logo start-->");
document.write("<a id=\"logo_link\" href=\"about.html\" class=\"logo\">Blue0x|<span>Market</span></a>");
document.write("<!--logo end-->");
document.write("<div class=\"horizontal-menu navbar-collapse collapse\">");
document.write("<ul class=\"nav navbar-nav\">");
document.write("<li class=\"dropdown\">");
document.write("<a data-toggle=\"dropdown\" data-hover=\"dropdown\" class=\"dropdown-toggle\" href=\"#\"><span data-i18n=\"menu_buy\">Buy</span> <b class=\" fa fa-angle-down\"></b></a>");
document.write("<ul class=\"dropdown-menu\">");
document.write("<li><a id=\"view_all_link\" href=\"ViewAll.html?setLng=en\"><span data-i18n=\"menu_view_all\">View All Items</span></a></li>");
document.write("<li><a id=\"search_location_link\" href=\"SearchByLocation.html?setLng=en\">Search by Location</span></a></li>");
document.write("<li><a id=\"search_category_link\" href=\"SearchByCategory.html?setLng=en\"><span data-i18n=\"menu_search_category\">Search by Category</span></a></li>");
document.write("</ul>");
document.write("</li>");
document.write("<li class=\"dropdown\">");
document.write("<a data-toggle=\"dropdown\" data-hover=\"dropdown\" class=\"dropdown-toggle\" href=\"#\"><span data-i18n=\"menu_sell\">Sell</span> <b class=\" fa fa-angle-down\"></b></a>");
document.write("<ul class=\"dropdown-menu\">");
document.write("<li><a id=\"new_item_link\" href=\"ListNewItem.html?setLng=en\"><span data-i18n=\"menu_list_new\">List New Item</span></a></li>");
document.write("</ul>");
document.write("</li>");
document.write("<li class=\"dropdown\">");
document.write("<a data-toggle=\"dropdown\" data-hover=\"dropdown\" class=\"dropdown-toggle\" href=\"#\"><span data-i18n=\"menu_send\">Send</span> <b class=\" fa fa-angle-down\"></b></a>");
document.write("<ul class=\"dropdown-menu\">");
document.write("<li><a id=\"sendcur_link\" href=\"sendCurrency.html?setLng=en\"><span data-i18n=\"sendcur_link\">Send Currency</span></a></li>");
document.write("<li><a id=\"sendblx_link\" href=\"sendBLX.html?setLng=en\"><span data-i18n=\"sendblx_link\">Send BLX</span></a></li>");
document.write("</ul>");
document.write("</li>");
document.write("<li class=\"dropdown\">");
document.write("<a data-toggle=\"dropdown\" data-hover=\"dropdown\" class=\"dropdown-toggle\" href=\"#\"><span data-i18n=\"menu_rec\">Receive</span> <b class=\" fa fa-angle-down\"></b></a>");
document.write("<ul class=\"dropdown-menu\">");
document.write("<li><a id=\"qr_link\" href=\"genQR.html?setLng=en\"><span data-i18n=\"qr_link\">View QR Code</span></a></li>");
document.write("</ul>");
document.write("</li>");
document.write("</ul>");
document.write("</div>");
document.write("<div class=\"top-nav\">");
document.write("<ul class=\"nav pull-right top-menu\">");
document.write("<!-- user login dropdown start-->");
document.write("<a class=\"btn btn-info\" style=\"margin:5px;\" href=\"account_details.html\" id=\"username\">Log In</a>");
document.write("</ul>");
document.write("<!-- user login dropdown end -->");
document.write("</div>");
document.write("</header>");
document.write("<!--header end-->");
