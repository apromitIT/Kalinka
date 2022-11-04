class customHeader extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
		<header>
		<div class="container">
			<a href="index.html" class="logo-dez"><img src="src/logo_dez.svg"
					alt="логотип компании по дезинфекции, дезинсекции, дератизации Калинка_ДЕЗ"></a>
			<nav class="nav-bar" id="navBar">
				<ul class="links">
					<li><a href="index.html">Главная</a></li>
					<li><a href="about.html">О компании</a></li>
					<li><a href="services.html">Услуги</a></li>
					<li><a href="sertificats.html">Сертификаты</a></li>
					<li><a href="work.html">Вакансии</a></li>
					<li><a href="contacts.html">Контакты</a></li>
				</ul>
			</nav>
			<div class="phone-links">
			<a href="tel:+7-495-236-01-45" class="phone-num">+7-495-236-01-45</a>
			<a href="#" class="call-back" data-bs-toggle="modal" data-bs-target="#callBackModal">Заказать обратный звонок</a>
			</div><!-- /phone-links -->
			<a href="#" class="menu-btn">
				<span></span>
			</a>
		</div><!-- /container -->
	</header>
		`
	}
}

class customFooter extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
		<footer id="footer">
		<div class="first-floor">
			<div class="container">
				<div class="footer-inner row">
					<div class="footer-menu">

						<ul class="footer-links links">
							<li><a href="index.html">Главная</a></li>
							<li><a href="about.html">О компании</a></li>
							<li><a href="services.html">Услуги</a></li>
							<li><a href="sertificats.html">Сертификаты</a></li>
							<li><a href="work.html">Вакансии</a></li>
							<li><a href="contacts.html">Контакты</a></li>
						</ul>

						<ul class="contacts">
							<li>
								<p><b>Телефон:</b><br> +7-495-236-01-45</p>
							</li>
							<li>
								<p><b>Адрес:</b><br> 107045, г.Москва,
									Луков переулок, д.10</p>
							</li>
						</ul>

						<ul class="contacts">
							<li>
								<p><b>Почта:</b><br> kalinka-dez@list.ru</p>
							</li>
							<li>
								<p><b>График работы офиса:</b><br> Пн-пт: с 09:00 до 17:00<br>
									Сб-Вс: выходной</p>
							</li>
						</ul>

						<ul class="order-btns footer-btns">
							<li><a href="#" data-bs-toggle="modal" data-bs-target="#callBackModal" class="btn btn-cta">Заказать обратный звонок</a></li>
							<li><a href="#" data-bs-toggle="modal" data-bs-target="#orderModal" class="btn btn-cta">Заказать обработку</a></li>
						</ul>

					</div><!-- /footer-menu-->
				</div> <!-- /footer-inner row -->
			</div><!-- /container-->
		</div><!-- /first-floor-->

		<div class="second-floor">
			<div class="container">
				<div class="row">
					<div class="copyright">
						<p class="footer-next">&copy; 2003 - 2022 ООО «Калинка-ДЕЗ»<br>
							&copy; Все права защищены. Данный веб-сайт носит информационный характер и не является публичной
							офертой.
						</p>
					</div><!-- /copyright-->
				</div> <!-- /row -->
			</div><!-- /container-->
		</div><!-- /second-floor-->
	</footer>
		`
	}
}

class customDez extends HTMLElement {
	connectedCallback(){
		this.innerHTML = `
		<section id="threeDez" class="three-dez">
		<div class="container container-fluid">
			<div class="dez-content">
				<div class="ellipse"></div>
				<h2 class="title">Услуги по дератизации, дезинфекции и дезинсекции</h2>
				<div class="dez-items row">
					<div class="dez-item col-lg-4 col-md-11">
						<h3>Дератизация</h3>
						<div class="icon dez-icon icon-rat"></div>
						<p class="dez-discription">Комплекс профилактических и истребительных мероприятий, направленных на
							снижение численности и уничтожение грызунов, опасных в эпидемиологическом отношении (являющихся
							источниками и переносчиками такх инфекционных заболеваний, как чума, туляремия и др.) и наносящих
							экономический ущерб.</p>
					</div>
					<div class="dez-item col-lg-4 col-md-11">
						<h3>Дезинфекция</h3>
						<div class="icon dez-icon icon-virus"></div>
						<p class="dez-discription">Комлекс мер, направленных на уничтожение в окружающей среде болезнетворных
							микроорганизмов (бактерий, вирусов и грибков), являющихся возбудителями заразных инфекционных
							заболеваний.</p>
					</div>
					<div class="dez-item col-lg-4 col-md-11">
						<h3>Дезинсекция</h3>
						<div class="icon dez-icon icon-insect"></div>
						<p class="dez-discription">Комплекс профилактических и истребительных мероприятий, направленных на
							уничтожение членистоногих (насекомых и клещей), являющихся переносчиками возбудителей инфекционных
							заболеваний, а также наносящих вред пищевым и сельскохозяйственным продуктам и жилищу человека.</p>
					</div>
				</div>
			</div>
		</div><!--/ container  -->
	</section>
		`
	}
}

customElements.define('custom-header', customHeader);
customElements.define('custom-footer', customFooter);
customElements.define('custom-dez', customDez);

export default customHeader;
