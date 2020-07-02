function header(){
  document.getElementById("wrapper").innerHTML += `
  <nav class="navbar navbar-light bg-white sticky-top">

  <strong><a class="navbar-brand text-primary" href="top.html">
    <img src="logo.jpg" width="30" height="30" class="d-inline-block align-top rounded" alt="">
    検索システム
  </a></strong>

  <button type="button" class="navbar-toggler border-white" data-toggle="collapse" data-target="#Navber" aria-controls="Navber" aria-expanded="false" aria-label="ナビゲーションの切替">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="Navber">
    <ul class="navbar-nav mr-auto pr-1" id="nav_list">
      <li class="nav-item text-right"><a href="top.html" class="nav-link">top.html</a></li>
      <li class="nav-item text-right"><a href="index.html" class="nav-link">index.html</a></li>
      <li class="nav-item text-right"><a href="show.html" class="nav-link">show.html</a></li>
      <li class="nav-item text-right"><a href="#" class="nav-link">メニュー</a></li>
      <li class="nav-item text-right dropdown">
        <a href="#" class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">ドロップダウン</a>
        <div class="dropdown-menu text-right" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">メニュー</a>
          <a class="dropdown-item" href="#">メニュー</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">その他</a>
        </div>
      </li>
      <li class="nav-item text-right"><a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">無効</a></li>
    </ul>
  </div>

  </nav>
  `;
}