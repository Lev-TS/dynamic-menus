import { MenuPageParams } from "../types";

export type SubMenuPageParams = MenuPageParams & { sub_menu: string };
export type SubMenuProps = { params: SubMenuPageParams };
