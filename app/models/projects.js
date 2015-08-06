import DS from 'ember-data';

export default DS.Model.extend({
  id: DS.attr('number'),
  user_id: DS.attr('number'),
  remixed_from: DS.attr('number'),
  version: DS.attr('string'),
  title: DS.attr('string'),
  featured: DS.attr('boolean'),
});
