/**
 * @module
 * @public
 * @description
 * The `di` module provides dependency injection container services.
 */

export {
  InjectMetadata,
  OptionalMetadata,
  InjectableMetadata,
  VisibilityMetadata,
  SelfMetadata,
  ParentMetadata,
  AncestorMetadata,
  UnboundedMetadata,
  DependencyMetadata,
  self,
  unbounded
} from './src/di/metadata';

// we have to reexport * because Dart and TS export two different sets of types
export * from './src/di/decorators';

export {forwardRef, resolveForwardRef, ForwardRefFn} from './src/di/forward_ref';
export {
  resolveBindings,
  Injector,
  ProtoInjector,
  DependencyProvider,
  PUBLIC_AND_PRIVATE,
  PUBLIC,
  PRIVATE,
  undefinedValue

} from './src/di/injector';
export {Binding, BindingBuilder, ResolvedBinding, Dependency, bind} from './src/di/binding';
export {Key, KeyRegistry, TypeLiteral} from './src/di/key';
export {
  NoBindingError,
  AbstractBindingError,
  AsyncBindingError,
  CyclicDependencyError,
  InstantiationError,
  InvalidBindingError,
  NoAnnotationError,
  OutOfBoundsError
} from './src/di/exceptions';
export {OpaqueToken} from './src/di/opaque_token';
