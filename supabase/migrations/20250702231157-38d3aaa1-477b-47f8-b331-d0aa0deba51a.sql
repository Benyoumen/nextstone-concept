-- Add 'admin' as a valid user type to the profiles table
-- First, let's see what constraint exists on user_type column
DO $$ 
DECLARE 
    constraint_exists boolean;
BEGIN
    -- Check if there's a check constraint on user_type
    SELECT EXISTS (
        SELECT 1 
        FROM information_schema.check_constraints cc
        JOIN information_schema.constraint_column_usage ccu ON cc.constraint_name = ccu.constraint_name
        WHERE ccu.table_name = 'profiles' AND ccu.column_name = 'user_type'
    ) INTO constraint_exists;
    
    -- If no constraint exists, we can just update existing rows and add admin users
    IF NOT constraint_exists THEN
        RAISE NOTICE 'No check constraint found on user_type column. Ready to add admin user type.';
    ELSE
        RAISE NOTICE 'Check constraint exists on user_type column. Need to modify it.';
        
        -- Drop the existing constraint if it exists
        ALTER TABLE public.profiles DROP CONSTRAINT IF EXISTS profiles_user_type_check;
        
        -- Add new constraint that includes admin
        ALTER TABLE public.profiles ADD CONSTRAINT profiles_user_type_check 
        CHECK (user_type IN ('developer', 'fund', 'originador', 'admin'));
    END IF;
END $$;

-- Create a sample admin user profile for testing (optional)
-- This will help with testing the admin dashboard
INSERT INTO public.profiles (id, user_type, email, company_name) 
VALUES (
    gen_random_uuid(), 
    'admin', 
    'admin@nextstone.com', 
    'NextStone Admin'
) ON CONFLICT (id) DO NOTHING;