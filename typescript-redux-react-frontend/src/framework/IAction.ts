export enum ActionType {
    INIT = "@@INIT",
    update_user = "update_user",
    create_user = "create_user",
    create_asset = "create_asset",
    update_asset = "update_asset",
    delete_asset = "delete_asset",
    render_test = "render_test",
    server_called = "server_called",
    asset_updated = "asset_updated",
    add_assets_from_server = "add_assets_from_server" 
}
export interface IAction {
    type: ActionType;
}
