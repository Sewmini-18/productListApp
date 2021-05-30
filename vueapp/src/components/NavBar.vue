<template name="navbar">
  <nav class="navbar navbar-expand-lg navbar-light bg-warning" >
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img
          src="/docs/5.0/assets/brand/bootstrap-logo.svg"
          alt=""
          width="30"
          height="24"
        />
      </a>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Product List</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Add Product</a>
          </li>
        </ul>
        <form class="d-flex">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-dark" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>