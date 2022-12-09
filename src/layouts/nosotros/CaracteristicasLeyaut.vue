<template>
  <div class="d-flex justify-content-center py-5">
    <div>
      <nav>
        <div class="nav nav-tabs" id="nav-tab" role="tablist">
          <button
            class="nav-link active"
            id="nav-home-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-home"
            type="button"
            role="tab"
            aria-controls="nav-home"
            aria-selected="true"
          >
            Home
          </button>
          <button
            class="nav-link"
            id="nav-profile-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-profile"
            type="button"
            role="tab"
            aria-controls="nav-profile"
            aria-selected="false"
          >
            Profile
          </button>
          <button
            class="nav-link"
            id="nav-contact-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-contact"
            type="button"
            role="tab"
            aria-controls="nav-contact"
            aria-selected="false"
          >
            Contact
          </button>
          <button
            class="nav-link"
            id="nav-disabled-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-disabled"
            type="button"
            role="tab"
            aria-controls="nav-disabled"
            aria-selected="false"
          >
            Disabled
          </button>
        </div>
      </nav>
      <div class="tab-content" id="nav-tabContent">
        <div
          class="tab-pane fade show active"
          id="nav-home"
          role="tabpanel"
          aria-labelledby="nav-home-tab"
          tabindex="0"
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia unde
          molestias dignissimos cum perferendis ea fugiat ad quam quas aliquam!
        </div>
        <div
          class="tab-pane fade"
          id="nav-profile"
          role="tabpanel"
          aria-labelledby="nav-profile-tab"
          tabindex="0"
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia unde
          molestias dignissimos cum perferendis ea fugiat ad quam quas aliquam!
        </div>
        <div
          class="tab-pane fade"
          id="nav-contact"
          role="tabpanel"
          aria-labelledby="nav-contact-tab"
          tabindex="0"
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia unde
          molestias dignissimos cum perferendis ea fugiat ad quam quas aliquam!
        </div>
        <div
          class="tab-pane fade"
          id="nav-disabled"
          role="tabpanel"
          aria-labelledby="nav-disabled-tab"
          tabindex="0"
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia unde
          molestias dignissimos cum perferendis ea fugiat ad quam quas aliquam!
        </div>
      </div>
    </div>
  </div>

  <div class="container py-5">
    <h2>NUESTRA HISTORIA</h2>

    <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam fuga nostrum et dolore dolores veritatis aspernatur placeat nulla laudantium totam quia, mollitia pariatur hic. Architecto fuga nostrum consectetur magnam nobis.
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>