<script>
  let reviewPlatforms = ['Reviews', 'Report Guru', 'BestTech']
  let reviewByPeople = [
    {
      name: 'Colton Smith',
      imagePath: '/assets/image-colton.jpg',
      buyerStatus: 'Verified Buyer',
      reviewDescription:
        '"We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent!"',
    },
    {
      name: 'Irene Roberts',
      imagePath: '/assets/image-irene.jpg',
      buyerStatus: 'Verified Buyer',
      reviewDescription:
        '"Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery."',
    },
    {
      name: 'Anne Wallace',
      imagePath: '/assets/image-anne.jpg',
      buyerStatus: 'Verified Buyer',
      reviewDescription:
        '"Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone!"',
    },
  ]
</script>

<main class="flex-1 flex flex-col justify-center">
  <div class="pt-20 px-5 md:container md:mx-auto">
    <div class="md:grid md:grid-cols-2">
      <div>
        <h1
          class="text-cstm-primary-dark-magenta font-bold text-4xl md:text-6xl text-center md:text-left md:max-w-lg"
        >
          10,000+ of our users love our products.
        </h1>
        <p class="text-center md:text-left mt-8 mb-12 md:max-w-lg">
          We only provide great products combined with excellent customer
          service. See what our satisfied customers are saying about our
          services.
        </p>
      </div>
      <div>
        <div class="mb-16">
          {#each reviewPlatforms as reviewPlatform}
            <div
              class="bg-cstm-neutral-light-grayish-magenta py-5 mb-5 text-center rounded-lg"
            >
              <div class="flex justify-center gap-2 mb-3">
                {#each { length: 5 } as _}
                  <img src="/assets/icon-star.svg" alt="star icon" />
                {/each}
              </div>
              <p class="text-cstm-primary-dark-magenta font-bold">
                Rated 5 stars in {reviewPlatform}
              </p>
            </div>
          {/each}
        </div>
      </div>
    </div>

    <div class="md:grid md:grid-cols-3 md:gap-5">
      {#each reviewByPeople as review}
        <div
          class={`bg-cstm-primary-dark-magenta mb-5 px-8 py-10 rounded-lg text-white`}
        >
          <div class="flex items-center gap-5 mb-8">
            <img
              src={review.imagePath}
              alt={review.name}
              class="rounded-full w-14"
            />
            <div>
              <p class="font-bold">{review.name}</p>
              <p class="text-cstm-primary-soft-pink">{review.buyerStatus}</p>
            </div>
          </div>
          <p>{review.reviewDescription}</p>
        </div>
      {/each}
    </div>
  </div>
</main>
