echo "this is the var $E_VUE_BUILD_MODE"
if [ "$E_VUE_BUILD_MODE" = "test_tier" ]
then npm run build-test
elif [ "$E_VUE_BUILD_MODE" = "qa_tier" ]
then npm run build-qa
elif [ "$E_VUE_BUILD_MODE" = "beta_tier" ]
then npm run build-beta
else npm run build
fi
