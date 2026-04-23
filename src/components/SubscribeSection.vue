<template>
  <section class="section-space">
    <div class="section-shell">
      <div class="rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-12">
        <div class="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 class="font-display text-3xl text-white">Subscribe by email</h2>
            <p class="mt-3 max-w-xl text-sm text-white/65 md:text-base">
              Nhap email de nhan thong bao ve du an moi, bai viet, va cap nhat san pham.
            </p>
          </div>
          <form class="flex w-full max-w-md flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="you@email.com"
              class="h-12 flex-1 rounded-full border border-white/15 bg-black/20 px-4 text-sm text-white placeholder:text-white/35 focus:border-white/40 focus:outline-none"
            />
            <button
              type="submit"
              class="h-12 rounded-full bg-white px-6 text-xs uppercase tracking-[0.2em] text-black transition hover:bg-gray-200"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
