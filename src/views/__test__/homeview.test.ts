import { beforeEach, describe, expect, it } from "vitest";
import { shallowMount } from "@vue/test-utils";
import HomeView from "@/views/HomeView.vue";

function mountComponent() {
  return shallowMount(HomeView, {
    global: {
      stubs: ["footer-item", "nav-bar"],
    },
  });
}

let comp: ReturnType<typeof mountComponent>;

describe("HomeView", () => {
  beforeEach(() => {
    comp = mountComponent();
  });

  it("renders properly", () => {
    expect(comp).toBeDefined();
  });
});
