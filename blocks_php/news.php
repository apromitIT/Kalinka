<?php
	require_once("blocks_php/connect_data_base.php");

	$result = $mysql->query("SELECT * FROM `news`");
	?>

	<section class="section">
		<div class="container-fluid">
			<div class="row">
				<h2 class="title">новости</h2>
				<div class="swiper">
					<div class="swiper-wrapper">

					<?php while($news = $result->fetch_assoc()) { ?>
						<div class="swiper-slide">
							<div class="slider-item">
								<div class="slider-cover"></div>
								<div class="slider-img">
									<img class="news-pic" src="<?php echo $news['picture'];?>" alt="">
								</div>
								<div class="slider-news">
									<h4 class="title"><?php echo $news['title']; ?></h4>
									<p><?php echo $news['content']; ?></p>
								</div>
							</div>
						</div>

					<?php } ?>
					</div>
					<!-- /swiper-wrapper -->
					<div class="swiper-button-prev"></div>
					<div class="swiper-button-next"></div>
					<div class="swiper-pagination"></div>

				</div>
				<!-- /swiper -->
			</div>
			<!--	 /row -->
		</div>
		<!--  /container-fluid -->
	</section>
<!-- /slider -->

<?php $mysql->close(); ?>
