import {
  AbstractMermaidTokenBuilder,
  CommonValueConverter,
  EmptyFileSystem,
  GitGraphGeneratedModule,
  MermaidGeneratedSharedModule,
  __name,
  createDefaultCoreModule,
  createDefaultSharedCoreModule,
  inject,
  lib_exports
} from "./chunk-DFPXKSZ7.js";

// node_modules/@mermaid-js/parser/dist/chunks/mermaid-parser.core/chunk-S6J4BHB3.mjs
var _a;
var GitGraphTokenBuilder = (_a = class extends AbstractMermaidTokenBuilder {
  constructor() {
    super(["gitGraph"]);
  }
}, __name(_a, "GitGraphTokenBuilder"), _a);
var GitGraphModule = {
  parser: {
    TokenBuilder: __name(() => new GitGraphTokenBuilder(), "TokenBuilder"),
    ValueConverter: __name(() => new CommonValueConverter(), "ValueConverter")
  }
};
function createGitGraphServices(context = EmptyFileSystem) {
  const shared = inject(
    createDefaultSharedCoreModule(context),
    MermaidGeneratedSharedModule
  );
  const GitGraph = inject(
    createDefaultCoreModule({ shared }),
    GitGraphGeneratedModule,
    GitGraphModule
  );
  shared.ServiceRegistry.register(GitGraph);
  return { shared, GitGraph };
}
__name(createGitGraphServices, "createGitGraphServices");

export {
  GitGraphModule,
  createGitGraphServices
};
//# sourceMappingURL=chunk-SHEFMAJB.js.map
