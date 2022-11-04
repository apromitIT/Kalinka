<?php
	require_once("blocks_php/header.php");
	?>

	<section class="section sertificats-section">
		<div class="container container-fluid">
			<h2 class="title">Сертификаты на производимые нами работы</h2>
			<div class="sertificats row">
				<div class="sertificats ellipse"></div>
				<div class="sertificats-inner col-lg-4 col-md-12">
					<div class="sertificats-content">
						<p>Санитарно-эпидемиологическое заключение 55.99.25.000.М.000389.09.04 от 07/09/2004
							(по Московской области)</p>
					</div>
					<a href="#" data-bs-toggle="modal" data-bs-target="#sert-1">
						<div class="sertificats-img sert-1 col-lg-4 col-md-12"></div>
					</a>

				</div>
				<div class="sertificats-inner col-lg-4 12 col-md-12">
					<div class="sertificats-content">
						<p>Санитарно-эпидемиологическое заключение 77.01.16.000.М.424.01.06 от 16/01/2006 (по г.Москве)</p>
					</div>
					<a href="#" data-bs-toggle="modal" data-bs-target="#sert-2">
						<div class="sertificats-img sert-2"></div>
					</a>
				</div>

				<div class="sertificats-inner col-lg-4 12 col-md-12">
					<div class="sertificats-content">
						<p>Санитарно-эпидемиологическое заключение 77.01.16.000.М.004318.06.07 от 26/06/2007 (по г.Москве)</p>
					</div>
					<a href="#" data-bs-toggle="modal" data-bs-target="#sert-3">
						<div class="sertificats-img sert-3"></div>
					</a>
				</div>

			</div>
		</div>

	</section>

		<!-- Модальное окно сертификат 1-->
	<div class="modal fade" id="sert-1" tabindex="-1">
		<div class="modal-dialog modal-dialog-scrollable modal-fullscreen modal-fullscreen-sm-down">
			<div class="modal-content">
				<div class="modal-header modal-header-sert">
					<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Закрыть"></button>
				</div>
				<div class="modal-body modal-sert">
					<div class="full-sert sert-1 col-xxl-5 col-lg-6 col-sm-9 col-12"></div>
				</div>
			</div>
		</div>
	</div>
	<!-- /Модальное окно сертификат 1-->

	<!-- Модальное окно сертификат 2-->
	<div class="modal fade" id="sert-2" tabindex="-1">
		<div class="modal-dialog modal-dialog-scrollable modal-fullscreen modal-fullscreen-sm-down">
			<div class="modal-content">
				<div class="modal-header modal-header-sert">
					<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Закрыть"></button>
				</div>
				<div class="modal-body modal-sert">
					<div class="full-sert sert-2 col-xxl-5 col-lg-6 col-sm-9 col-12"></div>
				</div>
			</div>
		</div>
	</div>
	<!-- /Модальное окно сертификат 2-->

	<!-- Модальное окно сертификат 3-->
	<div class="modal fade" id="sert-3" tabindex="-1">
		<div class="modal-dialog modal-dialog-scrollable modal-fullscreen modal-fullscreen-sm-down">
			<div class="modal-content">
				<div class="modal-header modal-header-sert">
					<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Закрыть"></button>
				</div>
				<div class="modal-body modal-sert">
					<div class="full-sert sert-3 col-xxl-5 col-lg-6 col-sm-9 col-12"></div>
				</div>
			</div>
		</div>
	</div>
	<!-- /Модальное окно сертификат 3-->

	<?php
	require_once("blocks_php/dez_services.php");
	require_once("blocks_php/modals.php");
	require_once("blocks_php/footer.php");
	?>







