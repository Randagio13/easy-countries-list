'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _countries = require('./utils/countries.json');

var _countries2 = _interopRequireDefault(_countries);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EasyCountriesList = function EasyCountriesList() {
  var _this = this;

  _classCallCheck(this, EasyCountriesList);

  this.countries = _countries2.default.countries;

  this.getAllCountries = function () {
    return _this.countries;
  };

  this.filterByCountryName = function (countryName) {
    var countryResult = _this.countries.filter(function (country) {
      return country.name.toLowerCase() === countryName.toLowerCase();
    });
    return countryResult[0];
  };

  this.filterByCountryCode = function (countryCode) {
    var countryResult = _this.countries.filter(function (country) {
      return country.countryCode.toLowerCase() === countryCode.toLowerCase();
    });
    return countryResult[0];
  };
};

exports.default = new EasyCountriesList();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcC9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7SUFFTTs7Ozs7T0FDSixZQUFZLG9CQUFjLFNBQWQ7O09BQ1osa0JBQWtCLFlBQU07QUFDdEIsV0FBTyxNQUFLLFNBQUwsQ0FEZTtHQUFOOztPQUdsQixzQkFBc0IsVUFBQyxXQUFELEVBQWlCO0FBQ3JDLFFBQU0sZ0JBQWdCLE1BQUssU0FBTCxDQUFlLE1BQWYsQ0FDcEI7YUFBVyxRQUFRLElBQVIsQ0FBYSxXQUFiLE9BQStCLFlBQVksV0FBWixFQUEvQjtLQUFYLENBREksQ0FEK0I7QUFJckMsV0FBTyxjQUFjLENBQWQsQ0FBUCxDQUpxQztHQUFqQjs7T0FNdEIsc0JBQXNCLFVBQUMsV0FBRCxFQUFpQjtBQUNyQyxRQUFNLGdCQUFnQixNQUFLLFNBQUwsQ0FBZSxNQUFmLENBQ3BCO2FBQVcsUUFBUSxXQUFSLENBQW9CLFdBQXBCLE9BQXNDLFlBQVksV0FBWixFQUF0QztLQUFYLENBREksQ0FEK0I7QUFJckMsV0FBTyxjQUFjLENBQWQsQ0FBUCxDQUpxQztHQUFqQjs7O2tCQVFULElBQUksaUJBQUoiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvdW50cmllc0xpc3QgZnJvbSAnLi91dGlscy9jb3VudHJpZXMuanNvbic7XG5cbmNsYXNzIEVhc3lDb3VudHJpZXNMaXN0IHtcbiAgY291bnRyaWVzID0gY291bnRyaWVzTGlzdC5jb3VudHJpZXM7XG4gIGdldEFsbENvdW50cmllcyA9ICgpID0+IHtcbiAgICByZXR1cm4gdGhpcy5jb3VudHJpZXM7XG4gIH07XG4gIGZpbHRlckJ5Q291bnRyeU5hbWUgPSAoY291bnRyeU5hbWUpID0+IHtcbiAgICBjb25zdCBjb3VudHJ5UmVzdWx0ID0gdGhpcy5jb3VudHJpZXMuZmlsdGVyKFxuICAgICAgY291bnRyeSA9PiBjb3VudHJ5Lm5hbWUudG9Mb3dlckNhc2UoKSA9PT0gY291bnRyeU5hbWUudG9Mb3dlckNhc2UoKVxuICAgICk7XG4gICAgcmV0dXJuIGNvdW50cnlSZXN1bHRbMF07XG4gIH07XG4gIGZpbHRlckJ5Q291bnRyeUNvZGUgPSAoY291bnRyeUNvZGUpID0+IHtcbiAgICBjb25zdCBjb3VudHJ5UmVzdWx0ID0gdGhpcy5jb3VudHJpZXMuZmlsdGVyKFxuICAgICAgY291bnRyeSA9PiBjb3VudHJ5LmNvdW50cnlDb2RlLnRvTG93ZXJDYXNlKCkgPT09IGNvdW50cnlDb2RlLnRvTG93ZXJDYXNlKClcbiAgICApO1xuICAgIHJldHVybiBjb3VudHJ5UmVzdWx0WzBdO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgRWFzeUNvdW50cmllc0xpc3QoKTtcbiJdfQ==