# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.1.0] - 2021-06-12

### Added

-   Alerta al guardar movimiento.
-   Endpoint para eliminar movimiento.
-   Campo descripción en el modelo de movimiento.
-   Validación del formulario al crear movimiento.
-   Vista de egresos de movimientos.

### Fixed

-   Arregla headers en home.
-   Refresh para que impacten los cambios instantaneamente.

## [1.0.1] - 2021-05-03

### Added

-   Cypress detection for running tests on memory
-   Cypress seed before each cypress test

### Changed

-   Creates tables on server init and avoids erase on shutdown

### Removed

-   Cypress experimental configuration

## [1.0.0] - 2021-04-26

### Added

-   Movements API
-   Home UI with charts and last movements
-   Incomes UI with last incomes

[unreleased]: https://github.com/TomiPiccinini/gitapp/compare/v1.1.0...HEAD
[1.1.0]: https://github.com/TomiPiccinini/gitapp/releases/tag/v1.1.0
[1.0.1]: https://github.com/TomiPiccinini/gitapp/releases/tag/v1.0.1
[1.0.0]: https://github.com/TomiPiccinini/gitapp/releases/tag/v1.0.0
