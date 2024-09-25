<template>
  <div>
    <footer class="border border-border bg-card">
      <Layout class="py-24">
        <LayoutContent class="flex justify-between max-lg:flex-col">
          <div class="flex flex-col gap-4">
            <div class="space-y-1">
              <Typography variant="h3">
                {{ SiteConfig.title }}
              </Typography>
              <Typography variant="muted">
                {{ SiteConfig.company.name }}
              </Typography>
              <Typography variant="muted">
                {{ SiteConfig.company.address }}
              </Typography>
            </div>
            <Typography
              variant="muted"
              class="italic"
            >
              © {{ new Date().getFullYear() }} {{ SiteConfig.company.name }} -
              All rights reserved.
            </Typography>
          </div>
          <div class="flex flex-col items-end gap-4">
            <Typography variant="large">
              Legal
            </Typography>
            <Typography
              as="link"
              variant="muted"
              class="hover:underline"
              href="/legal/terms"
            >
              Terms
            </Typography>
            <Typography
              as="link"
              variant="muted"
              class="hover:underline"
              href="/legal/privacy"
            >
              Privacy
            </Typography>
          </div>
          <div class="flex flex-col items-end gap-4">
            <Typography variant="large">
              Resources
            </Typography>
            <Typography
              as="link"
              variant="muted"
              class="hover:underline"
              href="/posts"
            >
              Blog
            </Typography>
            <Typography
              as="link"
              variant="muted"
              class="hover:underline"
              href="/orgs"
            >
              Dashboard
            </Typography>
            <Typography
              as="link"
              variant="muted"
              class="hover:underline"
              href="/account"
            >
              Account
            </Typography>
          </div>
        </LayoutContent>
      </Layout>
    </footer>
  </div>
</template>

<script lang="ts" setup>
import LayoutContent from "@/components/layout/Content.vue";
import Layout from "@/components/layout/index.vue";
import Typography from "@/components/ui/typography/Typography.vue";
import { SiteConfig } from "@/lib/site-config";
</script>
