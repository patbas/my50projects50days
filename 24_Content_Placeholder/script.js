const header      = document.getElementById('header');
const title       = document.getElementById('title');
const excerpt     = document.getElementById('excerpt');
const profile_img =  document.getElementById('profile_img');
const name        = document.getElementById('name');
const date        = document.getElementById('date');

const animated_bgs = document.querySelectorAll('.animated-bg');
const animated_bgs_text = document.querySelectorAll('.animated-bd-text');

setTimeout(getData, 2500);
function getData() {
   header.innerHTML = '<img src="https://images.unsplash.com/photo-1614946973832-3363a78a2026?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80" alt="pellicola film">';
   title.innerHTML = 'Lorem ipsum dolor sit amet.';
   excerpt.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi maxime impedit nemo unde ipsa tempora eligendi eaque, omnis nam obcaecati!';
   name.innerHTML = 'John Doe';
   profile_img.innerHTML = '<img src="https:/randomuser.me/api/portraits/men/45.jpg" alt="">';
   date.innerHTML = 'Oct 08, 2020';

   animated_bgs.forEach(bg => bg.classList.remove('animated-bg')
   );
   animated_bg_texts.forEach(bg => bg.classList.remote('animated-bg-text') );
}