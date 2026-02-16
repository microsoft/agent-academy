import { HookKeys, Hookable } from "hookable";
import { App, ComponentInternalInstance, ComponentOptions, SuspenseBoundary, VNode } from "vue";
import { RouteLocationNormalizedLoaded, RouteRecordNormalized } from "vue-router";

//#region ../devtools-kit/src/types/app.d.ts
type App$1 = any;
type VueAppInstance = ComponentInternalInstance & {
  type: {
    _componentTag: string | undefined;
    components: Record<string, ComponentInternalInstance['type']>;
    __VUE_DEVTOOLS_COMPONENT_GUSSED_NAME__: string;
    __isKeepAlive: boolean;
    devtools: {
      hide: boolean;
    };
    mixins: ComponentOptions[];
    extends: ComponentOptions;
    vuex: {
      getters: Record<string, unknown>;
    };
    computed: Record<string, unknown>;
  };
  __v_cache: Cache;
  __VUE_DEVTOOLS_NEXT_UID__: string;
  _isBeingDestroyed: boolean;
  _instance: VueAppInstance;
  _container: {
    _vnode: {
      component: VueAppInstance;
    };
  };
  isUnmounted: boolean;
  parent: VueAppInstance;
  appContext: {
    app: VueAppInstance & App$1 & {
      __VUE_DEVTOOLS_NEXT_APP_RECORD_ID__: string;
      __VUE_DEVTOOLS_NEXT_APP_RECORD__: AppRecord;
    };
  };
  __VUE_DEVTOOLS_NEXT_APP_RECORD__: AppRecord;
  suspense: SuspenseBoundary & {
    suspenseKey: string;
  };
  renderContext: Record<string, unknown>;
  devtoolsRawSetupState: Record<string, unknown>;
  setupState: Record<string, unknown>;
  provides: Record<string | symbol, unknown>;
  ctx: Record<string, unknown>;
} & App$1;
interface AppRecord {
  id: string;
  name: string;
  app?: App$1;
  version?: string;
  types?: Record<string, string | symbol>;
  instanceMap: Map<string, VueAppInstance>;
  perfGroupIds: Map<string, {
    groupId: number;
    time: number;
  }>;
  rootInstance: VueAppInstance;
  routerId?: string;
  iframe?: string;
}
//#endregion
//#region ../devtools-kit/src/types/command.d.ts
interface CustomCommandAction {
  type: 'url';
  /**
   * Url of the action, if set, execute the action will open the url
   */
  src: string;
}
interface CustomCommand {
  /**
   * The id of the command, should be unique
   */
  id: string;
  title: string;
  description?: string;
  /**
   * Order of the command, bigger number will be shown first
   * @default 0
   */
  order?: number;
  /**
   * Icon of the tab, support any Iconify icons, or a url to an image
   */
  icon?: string;
  /**
   * - action of the command
   * - __NOTE__: This will be ignored if `children` is set
   */
  action?: CustomCommandAction;
  /**
   * - children of action, if set, execute the action will show the children
   */
  children?: Omit<CustomCommand, 'children'>[];
}
//#endregion
//#region ../devtools-kit/src/types/inspector.d.ts
interface CustomInspectorOptions {
  id: string;
  label: string;
  icon?: string;
  treeFilterPlaceholder?: string;
  stateFilterPlaceholder?: string;
  noSelectionText?: string;
  actions?: {
    icon: string;
    tooltip?: string;
    action: () => void | Promise<void>;
  }[];
  nodeActions?: {
    icon: string;
    tooltip?: string;
    action: (nodeId: string) => void | Promise<void>;
  }[];
}
interface InspectorNodeTag {
  label: string;
  textColor: number;
  backgroundColor: number;
  tooltip?: string;
}
type EditStatePayload = {
  value: any;
  newKey?: string | null;
  remove?: undefined | false;
} | {
  value?: undefined;
  newKey?: undefined;
  remove: true;
};
interface CustomInspectorNode {
  id: string;
  label: string;
  children?: CustomInspectorNode[];
  tags?: InspectorNodeTag[];
  name?: string;
  file?: string;
}
interface CustomInspectorState {
  [key: string]: (StateBase | Omit<ComponentState, 'type'>)[];
}
//#endregion
//#region ../devtools-kit/src/types/component.d.ts
type ComponentInstance = any;
interface ComponentTreeNode {
  uid: string | number;
  id: string;
  name: string;
  renderKey: string | number;
  inactive: boolean;
  isFragment: boolean;
  hasChildren: boolean;
  children: ComponentTreeNode[];
  domOrder?: number[];
  consoleId?: string;
  isRouterView?: boolean;
  macthedRouteSegment?: string;
  tags: InspectorNodeTag[];
  autoOpen: boolean;
  meta?: any;
}
type ComponentBuiltinCustomStateTypes = 'function' | 'map' | 'set' | 'reference' | 'component' | 'component-definition' | 'router' | 'store';
interface ComponentCustomState extends ComponentStateBase {
  value: CustomState;
}
interface StateBase {
  key: string;
  value: any;
  editable?: boolean;
  objectType?: 'ref' | 'reactive' | 'computed' | 'other';
  raw?: string;
}
interface ComponentStateBase extends StateBase {
  type: string;
}
interface ComponentPropState extends ComponentStateBase {
  meta?: {
    type: string;
    required: boolean;
    /** Vue 1 only */
    mode?: 'default' | 'sync' | 'once';
  };
}
interface CustomState {
  _custom: {
    type: ComponentBuiltinCustomStateTypes | string;
    objectType?: string;
    display?: string;
    tooltip?: string;
    value?: any;
    abstract?: boolean;
    file?: string;
    uid?: number;
    readOnly?: boolean;
    /** Configure immediate child fields */
    fields?: {
      abstract?: boolean;
    };
    id?: any;
    actions?: {
      icon: string;
      tooltip?: string;
      action: () => void | Promise<void>;
    }[];
    /** internal */
    _reviveId?: number;
  };
}
type ComponentState = ComponentStateBase | ComponentPropState | ComponentCustomState;
interface InspectedComponentData {
  id: string;
  name: string;
  file: string;
  state: ComponentState[];
  functional?: boolean;
}
interface ComponentBounds {
  left: number;
  top: number;
  width: number;
  height: number;
}
//#endregion
//#region ../devtools-kit/src/ctx/state.d.ts
interface DevToolsAppRecords extends AppRecord {}
interface DevToolsState {
  connected: boolean;
  clientConnected: boolean;
  vitePluginDetected: boolean;
  appRecords: DevToolsAppRecords[];
  activeAppRecordId: string;
  tabs: CustomTab[];
  commands: CustomCommand[];
  highPerfModeEnabled: boolean;
  devtoolsClientDetected: {
    [key: string]: boolean;
  };
  perfUniqueGroupId: number;
  timelineLayersState: Record<string, boolean>;
}
declare function onDevToolsConnected(fn: () => void): Promise<void>;
declare function addCustomTab(tab: CustomTab): void;
declare function addCustomCommand(action: CustomCommand): void;
declare function removeCustomCommand(actionId: string): void;
//#endregion
//#region ../devtools-kit/src/ctx/hook.d.ts
declare enum DevToolsV6PluginAPIHookKeys {
  VISIT_COMPONENT_TREE = "visitComponentTree",
  INSPECT_COMPONENT = "inspectComponent",
  EDIT_COMPONENT_STATE = "editComponentState",
  GET_INSPECTOR_TREE = "getInspectorTree",
  GET_INSPECTOR_STATE = "getInspectorState",
  EDIT_INSPECTOR_STATE = "editInspectorState",
  INSPECT_TIMELINE_EVENT = "inspectTimelineEvent",
  TIMELINE_CLEARED = "timelineCleared",
  SET_PLUGIN_SETTINGS = "setPluginSettings",
}
interface DevToolsV6PluginAPIHookPayloads {
  [DevToolsV6PluginAPIHookKeys.VISIT_COMPONENT_TREE]: {
    app: App$1;
    componentInstance: ComponentInstance;
    treeNode: ComponentTreeNode;
    filter: string;
  };
  [DevToolsV6PluginAPIHookKeys.INSPECT_COMPONENT]: {
    app: App$1;
    componentInstance: ComponentInstance;
    instanceData: InspectedComponentData;
  };
  [DevToolsV6PluginAPIHookKeys.EDIT_COMPONENT_STATE]: {
    app: App$1;
    inspectorId: string;
    nodeId: string;
    path: string[];
    type: string;
    state: EditStatePayload;
    set: (object: any, path?: string | (string[]), value?: any, cb?: (object: any, field: string, value: any) => void) => void;
  };
  [DevToolsV6PluginAPIHookKeys.GET_INSPECTOR_TREE]: {
    app: App$1;
    inspectorId: string;
    filter: string;
    rootNodes: CustomInspectorNode[];
  };
  [DevToolsV6PluginAPIHookKeys.GET_INSPECTOR_STATE]: {
    app: App$1;
    inspectorId: string;
    nodeId: string;
    state: CustomInspectorState;
  };
  [DevToolsV6PluginAPIHookKeys.EDIT_INSPECTOR_STATE]: {
    app: App$1;
    inspectorId: string;
    nodeId: string;
    path: string[];
    type: string;
    state: EditStatePayload;
    set: (object: any, path?: string | (string[]), value?: any, cb?: (object: any, field: string, value: any) => void) => void;
  };
  [DevToolsV6PluginAPIHookKeys.INSPECT_TIMELINE_EVENT]: {
    app: App$1;
    layerId: string;
    event: TimelineEvent;
    all?: boolean;
    data: any;
  };
  [DevToolsV6PluginAPIHookKeys.TIMELINE_CLEARED]: Record<string, never>;
  [DevToolsV6PluginAPIHookKeys.SET_PLUGIN_SETTINGS]: {
    app: App$1;
    pluginId: string;
    key: string;
    newValue: any;
    oldValue: any;
    settings: any;
  };
}
interface DevToolsV6PluginAPIHooks {
  [DevToolsV6PluginAPIHookKeys.VISIT_COMPONENT_TREE]: (payload: DevToolsV6PluginAPIHookPayloads[DevToolsV6PluginAPIHookKeys.VISIT_COMPONENT_TREE]) => void;
  [DevToolsV6PluginAPIHookKeys.INSPECT_COMPONENT]: (payload: DevToolsV6PluginAPIHookPayloads[DevToolsV6PluginAPIHookKeys.INSPECT_COMPONENT]) => void;
  [DevToolsV6PluginAPIHookKeys.EDIT_COMPONENT_STATE]: (payload: DevToolsV6PluginAPIHookPayloads[DevToolsV6PluginAPIHookKeys.EDIT_COMPONENT_STATE]) => void;
  [DevToolsV6PluginAPIHookKeys.GET_INSPECTOR_TREE]: (payload: DevToolsV6PluginAPIHookPayloads[DevToolsV6PluginAPIHookKeys.GET_INSPECTOR_TREE]) => void;
  [DevToolsV6PluginAPIHookKeys.GET_INSPECTOR_STATE]: (payload: DevToolsV6PluginAPIHookPayloads[DevToolsV6PluginAPIHookKeys.GET_INSPECTOR_STATE]) => void;
  [DevToolsV6PluginAPIHookKeys.EDIT_INSPECTOR_STATE]: (payload: DevToolsV6PluginAPIHookPayloads[DevToolsV6PluginAPIHookKeys.EDIT_INSPECTOR_STATE]) => void;
  [DevToolsV6PluginAPIHookKeys.INSPECT_TIMELINE_EVENT]: (payload: DevToolsV6PluginAPIHookPayloads[DevToolsV6PluginAPIHookKeys.INSPECT_TIMELINE_EVENT]) => void;
  [DevToolsV6PluginAPIHookKeys.TIMELINE_CLEARED]: (payload: DevToolsV6PluginAPIHookPayloads[DevToolsV6PluginAPIHookKeys.TIMELINE_CLEARED]) => void;
  [DevToolsV6PluginAPIHookKeys.SET_PLUGIN_SETTINGS]: (payload: DevToolsV6PluginAPIHookPayloads[DevToolsV6PluginAPIHookKeys.SET_PLUGIN_SETTINGS]) => void;
}
declare enum DevToolsContextHookKeys {
  ADD_INSPECTOR = "addInspector",
  SEND_INSPECTOR_TREE = "sendInspectorTree",
  SEND_INSPECTOR_STATE = "sendInspectorState",
  CUSTOM_INSPECTOR_SELECT_NODE = "customInspectorSelectNode",
  TIMELINE_LAYER_ADDED = "timelineLayerAdded",
  TIMELINE_EVENT_ADDED = "timelineEventAdded",
  GET_COMPONENT_INSTANCES = "getComponentInstances",
  GET_COMPONENT_BOUNDS = "getComponentBounds",
  GET_COMPONENT_NAME = "getComponentName",
  COMPONENT_HIGHLIGHT = "componentHighlight",
  COMPONENT_UNHIGHLIGHT = "componentUnhighlight",
}
interface DevToolsContextHookPayloads {
  [DevToolsContextHookKeys.ADD_INSPECTOR]: {
    inspector: CustomInspectorOptions;
    plugin: DevToolsPlugin;
  };
  [DevToolsContextHookKeys.SEND_INSPECTOR_TREE]: {
    inspectorId: string;
    plugin: DevToolsPlugin;
  };
  [DevToolsContextHookKeys.SEND_INSPECTOR_STATE]: {
    inspectorId: string;
    plugin: DevToolsPlugin;
  };
  [DevToolsContextHookKeys.CUSTOM_INSPECTOR_SELECT_NODE]: {
    inspectorId: string;
    nodeId: string;
    plugin: DevToolsPlugin;
  };
  [DevToolsContextHookKeys.TIMELINE_LAYER_ADDED]: {
    options: TimelineLayerOptions;
    plugin: DevToolsPlugin;
  };
  [DevToolsContextHookKeys.TIMELINE_EVENT_ADDED]: {
    options: TimelineEventOptions;
    plugin: DevToolsPlugin;
  };
  [DevToolsContextHookKeys.GET_COMPONENT_INSTANCES]: {
    app: App$1;
  };
  [DevToolsContextHookKeys.GET_COMPONENT_BOUNDS]: {
    instance: ComponentInstance;
  };
  [DevToolsContextHookKeys.GET_COMPONENT_NAME]: {
    instance: ComponentInstance;
  };
  [DevToolsContextHookKeys.COMPONENT_HIGHLIGHT]: {
    uid: string;
  };
  [DevToolsContextHookKeys.COMPONENT_UNHIGHLIGHT]: Record<string, never>;
}
declare enum DevToolsMessagingHookKeys {
  SEND_INSPECTOR_TREE_TO_CLIENT = "sendInspectorTreeToClient",
  SEND_INSPECTOR_STATE_TO_CLIENT = "sendInspectorStateToClient",
  SEND_TIMELINE_EVENT_TO_CLIENT = "sendTimelineEventToClient",
  SEND_INSPECTOR_TO_CLIENT = "sendInspectorToClient",
  SEND_ACTIVE_APP_UNMOUNTED_TO_CLIENT = "sendActiveAppUpdatedToClient",
  DEVTOOLS_STATE_UPDATED = "devtoolsStateUpdated",
  DEVTOOLS_CONNECTED_UPDATED = "devtoolsConnectedUpdated",
  ROUTER_INFO_UPDATED = "routerInfoUpdated",
}
interface DevToolsMessagingHookPayloads {
  [DevToolsMessagingHookKeys.SEND_INSPECTOR_TREE_TO_CLIENT]: {
    inspectorId: string;
    rootNodes: CustomInspectorNode[];
  };
  [DevToolsMessagingHookKeys.SEND_INSPECTOR_STATE_TO_CLIENT]: {
    inspectorId: string;
    nodeId: string;
    state: CustomInspectorState;
  };
  [DevToolsMessagingHookKeys.SEND_TIMELINE_EVENT_TO_CLIENT]: TimelineEventOptions;
  [DevToolsMessagingHookKeys.SEND_INSPECTOR_TO_CLIENT]: {
    id: string;
    label: string;
    logo: string;
    icon: string;
    packageName: string | undefined;
    homepage: string | undefined;
  }[];
  [DevToolsMessagingHookKeys.DEVTOOLS_STATE_UPDATED]: {
    state: DevToolsState;
  };
  [DevToolsMessagingHookKeys.DEVTOOLS_CONNECTED_UPDATED]: {
    state: DevToolsState;
    oldState: DevToolsState;
  };
  [DevToolsMessagingHookKeys.ROUTER_INFO_UPDATED]: {
    state: RouterInfo;
  };
}
interface DevToolsMessagingHooks {
  [DevToolsMessagingHookKeys.SEND_INSPECTOR_TREE_TO_CLIENT]: (payload: DevToolsMessagingHookPayloads[DevToolsMessagingHookKeys.SEND_INSPECTOR_TREE_TO_CLIENT]) => void;
  [DevToolsMessagingHookKeys.SEND_INSPECTOR_STATE_TO_CLIENT]: (payload: DevToolsMessagingHookPayloads[DevToolsMessagingHookKeys.SEND_INSPECTOR_STATE_TO_CLIENT]) => void;
  [DevToolsMessagingHookKeys.SEND_TIMELINE_EVENT_TO_CLIENT]: (payload: DevToolsMessagingHookPayloads[DevToolsMessagingHookKeys.SEND_TIMELINE_EVENT_TO_CLIENT]) => void;
  [DevToolsMessagingHookKeys.SEND_ACTIVE_APP_UNMOUNTED_TO_CLIENT]: () => void;
  [DevToolsMessagingHookKeys.SEND_INSPECTOR_TO_CLIENT]: (payload: DevToolsMessagingHookPayloads[DevToolsMessagingHookKeys.SEND_INSPECTOR_TO_CLIENT]) => void;
  [DevToolsMessagingHookKeys.DEVTOOLS_STATE_UPDATED]: (payload: DevToolsMessagingHookPayloads[DevToolsMessagingHookKeys.DEVTOOLS_STATE_UPDATED]) => void;
  [DevToolsMessagingHookKeys.DEVTOOLS_CONNECTED_UPDATED]: (payload: DevToolsMessagingHookPayloads[DevToolsMessagingHookKeys.DEVTOOLS_CONNECTED_UPDATED]) => void;
  [DevToolsMessagingHookKeys.ROUTER_INFO_UPDATED]: (payload: DevToolsMessagingHookPayloads[DevToolsMessagingHookKeys.ROUTER_INFO_UPDATED]) => void;
}
interface DevToolsContextHooks extends DevToolsV6PluginAPIHooks {
  [DevToolsContextHookKeys.ADD_INSPECTOR]: (payload: DevToolsContextHookPayloads[DevToolsContextHookKeys.ADD_INSPECTOR]) => void;
  [DevToolsContextHookKeys.SEND_INSPECTOR_TREE]: (payload: DevToolsContextHookPayloads[DevToolsContextHookKeys.SEND_INSPECTOR_TREE]) => void;
  [DevToolsContextHookKeys.SEND_INSPECTOR_STATE]: (payload: DevToolsContextHookPayloads[DevToolsContextHookKeys.SEND_INSPECTOR_STATE]) => void;
  [DevToolsContextHookKeys.CUSTOM_INSPECTOR_SELECT_NODE]: (payload: DevToolsContextHookPayloads[DevToolsContextHookKeys.CUSTOM_INSPECTOR_SELECT_NODE]) => void;
  [DevToolsContextHookKeys.TIMELINE_LAYER_ADDED]: (payload: DevToolsContextHookPayloads[DevToolsContextHookKeys.TIMELINE_LAYER_ADDED]) => void;
  [DevToolsContextHookKeys.TIMELINE_EVENT_ADDED]: (payload: DevToolsContextHookPayloads[DevToolsContextHookKeys.TIMELINE_EVENT_ADDED]) => void;
  [DevToolsContextHookKeys.GET_COMPONENT_INSTANCES]: (payload: DevToolsContextHookPayloads[DevToolsContextHookKeys.GET_COMPONENT_INSTANCES]) => void;
  [DevToolsContextHookKeys.GET_COMPONENT_BOUNDS]: (payload: DevToolsContextHookPayloads[DevToolsContextHookKeys.GET_COMPONENT_BOUNDS]) => void;
  [DevToolsContextHookKeys.GET_COMPONENT_NAME]: (payload: DevToolsContextHookPayloads[DevToolsContextHookKeys.GET_COMPONENT_NAME]) => void;
  [DevToolsContextHookKeys.COMPONENT_HIGHLIGHT]: (payload: DevToolsContextHookPayloads[DevToolsContextHookKeys.COMPONENT_HIGHLIGHT]) => void;
  [DevToolsContextHookKeys.COMPONENT_UNHIGHLIGHT]: () => void;
}
//#endregion
//#region ../devtools-kit/src/core/component-inspector/index.d.ts
interface ComponentInspector {
  enabled: boolean;
  position: {
    x: number;
    y: number;
  };
  linkParams: {
    file: string;
    line: number;
    column: number;
  };
  enable: () => void;
  disable: () => void;
  toggleEnabled: () => void;
  openInEditor: (baseUrl: string, file: string, line: number, column: number) => void;
  onUpdated: () => void;
}
declare function getComponentInspector(): Promise<ComponentInspector>;
//#endregion
//#region ../devtools-kit/src/core/open-in-editor/index.d.ts
interface OpenInEditorOptions {
  baseUrl?: string;
  file?: string;
  line?: number;
  column?: number;
  host?: string;
}
declare function openInEditor(options?: OpenInEditorOptions): void;
//#endregion
//#region ../devtools-kit/src/ctx/api.d.ts
declare function createDevToolsApi(hooks: Hookable<DevToolsContextHooks & DevToolsMessagingHooks, HookKeys<DevToolsContextHooks & DevToolsMessagingHooks>>): {
  getInspectorTree(payload: Pick<DevToolsV6PluginAPIHookPayloads[DevToolsV6PluginAPIHookKeys.GET_INSPECTOR_TREE], "inspectorId" | "filter">): Promise<never[]>;
  getInspectorState(payload: Pick<DevToolsV6PluginAPIHookPayloads[DevToolsV6PluginAPIHookKeys.GET_INSPECTOR_STATE], "inspectorId" | "nodeId">): Promise<CustomInspectorState>;
  editInspectorState(payload: DevToolsV6PluginAPIHookPayloads[DevToolsV6PluginAPIHookKeys.EDIT_INSPECTOR_STATE]): void;
  sendInspectorState(inspectorId: string): void;
  inspectComponentInspector(): Promise<string>;
  cancelInspectComponentInspector(): void;
  getComponentRenderCode(id: string): any;
  scrollToComponent(id: string): void;
  openInEditor: typeof openInEditor;
  getVueInspector: typeof getComponentInspector;
  toggleApp(id: string, options?: {
    inspectingComponent?: boolean;
  }): void;
  inspectDOM(instanceId: string): void;
  updatePluginSettings(pluginId: string, key: string, value: string): void;
  getPluginSettings(pluginId: string): {
    options: Record<string, {
      label: string;
      description?: string;
    } & ({
      type: "boolean";
      defaultValue: boolean;
    } | {
      type: "choice";
      defaultValue: string | number;
      options: {
        value: string | number;
        label: string;
      }[];
      component?: "select" | "button-group";
    } | {
      type: "text";
      defaultValue: string;
    })> | null;
    values: any;
  };
};
type DevToolsApiType = ReturnType<typeof createDevToolsApi>;
//#endregion
//#region ../devtools-kit/src/ctx/index.d.ts
interface DevtoolsContext {
  hooks: Hookable<DevToolsContextHooks & DevToolsMessagingHooks, HookKeys<DevToolsContextHooks & DevToolsMessagingHooks>>;
  state: DevToolsState & {
    activeAppRecordId: string;
    activeAppRecord: DevToolsAppRecords;
    appRecords: DevToolsAppRecords[];
  };
  api: DevToolsApiType;
}
//#endregion
//#region ../devtools-kit/src/api/v6/index.d.ts
declare class DevToolsV6PluginAPI {
  private plugin;
  private hooks;
  constructor({
    plugin,
    ctx
  }: {
    plugin: DevToolsPlugin;
    ctx: DevtoolsContext;
  });
  get on(): {
    visitComponentTree: (handler: DevToolsV6PluginAPIHooks[DevToolsV6PluginAPIHookKeys.VISIT_COMPONENT_TREE]) => void;
    inspectComponent: (handler: DevToolsV6PluginAPIHooks[DevToolsV6PluginAPIHookKeys.INSPECT_COMPONENT]) => void;
    editComponentState: (handler: DevToolsV6PluginAPIHooks[DevToolsV6PluginAPIHookKeys.EDIT_COMPONENT_STATE]) => void;
    getInspectorTree: (handler: DevToolsV6PluginAPIHooks[DevToolsV6PluginAPIHookKeys.GET_INSPECTOR_TREE]) => void;
    getInspectorState: (handler: DevToolsV6PluginAPIHooks[DevToolsV6PluginAPIHookKeys.GET_INSPECTOR_STATE]) => void;
    editInspectorState: (handler: DevToolsV6PluginAPIHooks[DevToolsV6PluginAPIHookKeys.EDIT_INSPECTOR_STATE]) => void;
    inspectTimelineEvent: (handler: DevToolsV6PluginAPIHooks[DevToolsV6PluginAPIHookKeys.INSPECT_TIMELINE_EVENT]) => void;
    timelineCleared: (handler: DevToolsV6PluginAPIHooks[DevToolsV6PluginAPIHookKeys.TIMELINE_CLEARED]) => void;
    setPluginSettings: (handler: DevToolsV6PluginAPIHooks[DevToolsV6PluginAPIHookKeys.SET_PLUGIN_SETTINGS]) => void;
  };
  notifyComponentUpdate(instance?: ComponentInstance): void;
  addInspector(options: CustomInspectorOptions): void;
  sendInspectorTree(inspectorId: string): void;
  sendInspectorState(inspectorId: string): void;
  selectInspectorNode(inspectorId: string, nodeId: string): void;
  visitComponentTree(payload: DevToolsV6PluginAPIHookPayloads[DevToolsV6PluginAPIHookKeys.VISIT_COMPONENT_TREE]): Promise<any>;
  now(): number;
  addTimelineLayer(options: TimelineLayerOptions): void;
  addTimelineEvent(options: TimelineEventOptions): void;
  getSettings(pluginId?: string): any;
  getComponentInstances(app: App$1): Promise<ComponentInstance[]>;
  getComponentBounds(instance: ComponentInstance): Promise<ComponentBounds>;
  getComponentName(instance: ComponentInstance): Promise<string>;
  highlightElement(instance: ComponentInstance): Promise<any>;
  unhighlightElement(): Promise<any>;
}
//#endregion
//#region ../devtools-kit/src/api/index.d.ts
declare const DevToolsPluginAPI: typeof DevToolsV6PluginAPI;
//#endregion
//#region ../devtools-kit/src/types/plugin.d.ts
type PluginSettingsItem = {
  label: string;
  description?: string;
} & ({
  type: 'boolean';
  defaultValue: boolean;
} | {
  type: 'choice';
  defaultValue: string | number;
  options: {
    value: string | number;
    label: string;
  }[];
  component?: 'select' | 'button-group';
} | {
  type: 'text';
  defaultValue: string;
});
type PluginSetupFunction = (api: InstanceType<typeof DevToolsPluginAPI>) => void;
interface PluginDescriptor {
  id: string;
  label: string;
  app: App<any>;
  packageName?: string;
  homepage?: string;
  componentStateTypes?: string[];
  logo?: string;
  disableAppScope?: boolean;
  disablePluginScope?: boolean;
  /**
   * Run the plugin setup and expose the api even if the devtools is not opened yet.
   * Useful to record timeline events early.
   */
  enableEarlyProxy?: boolean;
  settings?: Record<string, PluginSettingsItem>;
}
interface DevToolsPlugin {
  descriptor: PluginDescriptor;
  setupFn: PluginSetupFunction;
}
//#endregion
//#region ../devtools-kit/src/types/router.d.ts
interface RouterInfo {
  currentRoute: RouteLocationNormalizedLoaded | null | Record<string, any>;
  routes: RouteRecordNormalized[];
}
//#endregion
//#region ../devtools-kit/src/types/tab.d.ts
type TabCategory = 'pinned' | 'app' | 'modules' | 'advanced';
type ModuleView = ModuleIframeView | ModuleVNodeView | ModuleSFCView;
interface ModuleIframeView {
  /**
   * Iframe view
   */
  type: 'iframe';
  /**
   * Url of the iframe
   */
  src: string;
  /**
   * Persist the iframe instance even if the tab is not active
   *
   * @default true
   */
  persistent?: boolean;
}
interface ModuleVNodeView {
  /**
   * Vue's VNode view
   */
  type: 'vnode';
  /**
   * Send vnode to the client, they must be static and serializable
   */
  vnode: VNode;
}
interface ModuleSFCView {
  /**
   * SFC view
   */
  type: 'sfc';
  /**
   * SFC component
   */
  sfc: string;
}
interface CustomTab {
  /**
   * The name of the tab, must be unique
   */
  name: string;
  /**
   * Icon of the tab, support any Iconify icons, or a url to an image
   */
  icon?: string;
  /**
   * Title of the tab
   */
  title: string;
  /**
   * Main view of the tab
   */
  view: ModuleView;
  /**
   * Category of the tab
   * @default 'app'
   */
  category?: TabCategory;
}
//#endregion
//#region ../devtools-kit/src/types/timeline.d.ts
interface TimelineEvent<TData = any, TMeta = any> {
  time: number;
  data: TData;
  logType?: 'default' | 'warning' | 'error';
  meta?: TMeta;
  groupId?: number | string;
  title?: string;
  subtitle?: string;
}
interface ScreenshotOverlayEvent {
  layerId: string;
  renderMeta: any;
}
interface ScreenshotOverlayRenderContext<TData = any, TMeta = any> {
  screenshot: ScreenshotData;
  events: (TimelineEvent<TData, TMeta> & ScreenshotOverlayEvent)[];
  index: number;
}
type ScreenshotOverlayRenderResult = HTMLElement | string | false;
interface ScreenshotData {
  time: number;
}
interface TimelineLayerOptions<TData = any, TMeta = any> {
  id: string;
  label: string;
  color: number;
  skipScreenshots?: boolean;
  groupsOnly?: boolean;
  ignoreNoDurationGroups?: boolean;
  screenshotOverlayRender?: (event: TimelineEvent<TData, TMeta> & ScreenshotOverlayEvent, ctx: ScreenshotOverlayRenderContext) => ScreenshotOverlayRenderResult | Promise<ScreenshotOverlayRenderResult>;
}
interface TimelineEventOptions {
  layerId: string;
  event: TimelineEvent;
  all?: boolean;
}
//#endregion
//#region ../devtools-kit/src/core/index.d.ts
declare function onDevToolsClientConnected(fn: () => void): Promise<void>;
//#endregion
//#region ../devtools-kit/src/core/plugin/index.d.ts
declare function setupDevToolsPlugin(pluginDescriptor: PluginDescriptor, setupFn: PluginSetupFunction): void;
//#endregion
export { type CustomCommand, type CustomTab, addCustomCommand, addCustomTab, onDevToolsClientConnected, onDevToolsConnected, removeCustomCommand, setupDevToolsPlugin, setupDevToolsPlugin as setupDevtoolsPlugin };