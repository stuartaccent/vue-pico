import { reactive } from "vue";

export interface IThemeState {
  style: string;
}

const initialState: IThemeState = {
  style: "",
};

export class ThemeService {
  state: IThemeState = reactive({ ...initialState });

  switch(style: string) {
    this.state.style = style;
  }
}

export const themeService = new ThemeService();
