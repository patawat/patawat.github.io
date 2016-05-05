import {Component} from '@angular/core';

export class Hero {
  id: number;
  name: string;
}

@Component({
  selector: 'my-app',
  template:`
  <body>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand"  href="#">
            Kasetsart University
          </a>
        </div>
        <div class=" navbar-right">
          <a class="navbar-brand"  href="#">
              Registration System
          </a>
        </div>
      </div>
    </nav>
    <div class="login-page">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-6 col-md-offset-3">
            <form>
              <div class="form-group">
                <label for="exampleInputEmail1">KU Student ID</label>
                <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Your ID">
              </div>
            <button type="login" class="btn btn-default">Login</button>
          </form>
        </div>
      </div>
    </div>
    </div>
    </body>
`,
styles: [`
  body{
  font-family: 'Open Sans', sans-serif;
  /*Backgroud-Colour*/
  background: #76b852; /* fallback for old browsers */
  background: -webkit-linear-gradient(right, #76b852, #8DC26F);
  background: -moz-linear-gradient(right, #76b852, #8DC26F);
  background: -o-linear-gradient(right, #76b852, #8DC26F);
  background: linear-gradient(to left, #76b852, #8DC26F);
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  margin: 0 auto 0 auto;
  width:100%;
  text-align:center;
  margin: 0px 0px 20px 0px;
}
.brand-img {
    width: 50px;
}
form {
  position: relative;
  z-index: 1;
  background: #FFFFFF;
  max-width: 360px;
  margin: 0 auto 100px;
  padding: 45px;
  text-align: center;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
}
form button:hover,form button:active,form button:focus {
  background: #43A047;
}
form button {
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  outline: 0;
  background: #4CAF50;
  width: 100%;
  border: 0;
  padding: 15px;
  color: #FFFFFF;
  font-size: 14px;
  -webkit-transition: all 0.3 ease;
  transition: all 0.3 ease;
  cursor: pointer;
}
.login-page {

  padding: 8% 0 0;
  margin: auto;
}
`]
})
export class AppComponent {
	title = 'Tour of Heroes';
	heroes = HEROES;
	selectedHero: Hero;

	onSelect(hero: Hero) { this.selectedHero = hero; }
}

var HEROES: Hero[] = [
  { "id": 11, "name": "Mr. Nice" },
  { "id": 12, "name": "Narco" },
  { "id": 13, "name": "Bombasto" },
  { "id": 14, "name": "Celeritas" },
  { "id": 15, "name": "Magneta" },
  { "id": 16, "name": "RubberMan" },
  { "id": 17, "name": "Dynama" },
  { "id": 18, "name": "Dr IQ" },
  { "id": 19, "name": "Magma" },
  { "id": 20, "name": "Tornado" }
];
