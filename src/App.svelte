<script>
  import Footer from './lib/footer.svelte'
  import MainContent from './lib/main-content.svelte'
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link
    rel="preconnect"
    href="https://fonts.gstatic.com"
    crossorigin="anonymous"
  />
  <link
    href="https://fonts.googleapis.com/css2?family=Spartan:wght@400;500;700&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<div
  class="min-h-screen font-spartan flex flex-col bg-pattern-mobile md:bg-pattern-desktop"
>
  <MainContent />
  <Footer />
</div>
