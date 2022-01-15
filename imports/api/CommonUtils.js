export function extendSchema(schemaObject) {
    schemaObject.createdAt = {
      type: Date,
      autoValue() {
        if (this.isInsert) return new Date();
  
        if (this.isUpsert) return { $setOnInsert: new Date() };
  
        this.unset(); // Prevent user from supplying their own value
      }
    };
    // Force value to be current date (on server) upon update
    // and don't allow it to be set upon insert.
    schemaObject.updatedAt = {
      type: Date,
      autoValue() {
        if (this.isUpsert || this.isUpdate) return new Date();
      }, 
      optional: true
    };
  
    schemaObject.deletedAt = {
      type: Date, 
      optional: true
    };
  
    return schemaObject;
  }