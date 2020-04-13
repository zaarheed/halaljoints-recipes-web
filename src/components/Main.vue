<template>
  <div className="lg:w-60vw lg:max-h-100vh lg:overflow-y-auto flex flex-col justify-between">
      <section className="py-16">
        <div className="px-8 max-w-5xl m-auto">
          <div className="border-b border-orange-200 pb-2 flex justify-between mb-6">
            <h2 className="font-bold text-gray-900 text-3xl">Recipes</h2>
            <button
              onClick={fetchRecipes}
              disabled={loading}
              className="px-3 py-2 rounded-md bg-orange-500 text-white focus:outline-none hover:bg-orange-400 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? `Fetching Recipes` : `Fetch Recipes`}
            </button>
          </div>
          <p className="text-l">{message}</p>
          <RecipesList recipes={recipes} loading={loading} />
        </div>
      </section>
      <Footer />
    </div>
</template>

<script>
export default {
  name: 'Main',
  props: {}
}
</script>

<style scoped>
</style>
