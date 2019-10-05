<template>
	<div style="position: relative">
		<base-nav type="default" effect="dark" expand>
		 	<a class="navbar-brand" href="/">Home</a>

			<div class="row" slot="content-header" slot-scope="{closeMenu}">
					<div class="col-6 collapse-brand">
				<a class="navbar-brand text-default" href="/">Home</a>
							
					</div>
					<div class="col-6 collapse-close">
							<close-button @click="closeMenu"></close-button>
					</div>
			</div>

			<ul class="navbar-nav ml-lg-auto">
					<base-dropdown tag="li" title="Main JavaScript">
						<li><a class="dropdown-item" href="/osnovy/osnovy-yazyka-javascript-dlya-novichkov">Basics JavaScript tasks</a></li>
						<li><a class="dropdown-item" href="/osnovy/regexp-primary">RegExp на примерах 33</a></li>
						<li><a class="dropdown-item" href="/osnovy/modern-js">Modern JS</a></li>
					</base-dropdown>

					<base-dropdown tag="li" title="Cheatsheets Practice">
						<li><a class="dropdown-item" href="/cheatsheet/regexpz">RegExp</a></li>
						<li><a class="dropdown-item" href="/cheatsheet/stringz">String</a></li>
						<li><a class="dropdown-item" href="/cheatsheet/arrayz">Array</a></li>
						<!-- <div class="dropdown-divider"></div>
						<a class="dropdown-item" href="#">Separated link</a> -->
					</base-dropdown>

					<base-dropdown tag="li" title="Infolink">
						<a href="/infolink/before-read" class="dropdown-item">Before read</a>
						<a href="/infolink/after-read" class="dropdown-item">After read</a>
						<a href="/infolink/linki" class="dropdown-item">Linki</a>
						<a href="/infolink/tech-skills" class="dropdown-item">Technical skills</a>             
					</base-dropdown>

					<li class="nav-item">
							<a href="#" class="nav-link nav-link-icon" @click="modals.modal0 = true">
								Contacts <i class="fa fa-address-book-o fa-spin fa-fw" aria-hidden="true"></i>
							</a>              
					</li>  
			</ul>
		</base-nav><modal :show.sync="modals.modal0">
								<template slot="header">
									 <h5 class="modal-title" id="exampleModalLabel">Contacts</h5>
								</template>
								<div>
								 <a href="mailto:ewgenij87snwork@gmail.com"><i class="fa fa-envelope" aria-hidden="true"></i> ewgenij87snwork@gmail.com</a>
								 <br>
								 <br>
								 <a href="https://www.facebook.com/profile.php?id=100002256371507"><i class="fa fa-facebook-official" aria-hidden="true"></i> Ewgenij Sorokin</a>
								 <br>
								 <br>
								 <a href="tel:+48-791-660-787"><i class="fa fa-phone-square" aria-hidden="true"></i> +48-791-660-787</a>
								 <br>
								 <br>
								 <a href="https://ewgenij87snwork.herokuapp.com"><i class="fa fa-male fa-2x" aria-hidden="true"></i> Portfolio-rezume</a>
								</div>
								<template slot="footer">
										<base-button type="secondary" @click="modals.modal0 = false">Close</base-button>
								</template>
							</modal>
</div>
</template>
<script>
	export default {
		name: 'navigate',
		components: {
			'BaseNav': () =>import('@/argon/components/BaseNav'),
			'BaseDropdown': () => import('@/argon/components/BaseDropdown'),
			'NavbarToggleButton': () => import('@/argon/components/NavbarToggleButton'),
			'CloseButton': () => import('@/argon/components/CloseButton'),
			'Modal': () => import('@/argon/components/Modal')
		},
		data(){
				return {
						modals: {
							modal0: false
						}
				}
		 }
	}
</script>
<style lang="sass" scoped>
.nav-item
	padding-left: 3em

</style>